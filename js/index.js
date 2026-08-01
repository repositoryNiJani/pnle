const startBtn = document.getElementById('startBtn');
const modalOverlay = document.getElementById('modalOverlay');
const closeModalBtn = document.getElementById('closeModalBtn');
const categoryButtons = document.getElementById('categoryButtons');

function openModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.add('active');
    modalOverlay.setAttribute('aria-hidden', 'false');
}

function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('active');
    modalOverlay.setAttribute('aria-hidden', 'true');
}

function toCategoryLabel(fileName) {
    const baseName = fileName.replace(/\.html$/i, '').replace(/[-_]+/g, ' ');
    return baseName
        .split(' ')
        .filter(Boolean)
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

async function loadQuestionCategories() {
    const fallbackCategories = [{ file: 'questions/pedia.html', label: 'Pedia' }];
    fallbackCategories.push({ file: 'questions/maternal.html', label: 'Maternal' });

    try {
        const response = await fetch('questions/', { cache: 'no-store' });
        if (!response.ok) throw new Error('Question folder listing unavailable');

        const html = await response.text();
        const matches = [...html.matchAll(/href=["']([^"']+\.html)["']/gi)];
        const files = [...new Set(matches.map((match) => match[1]))]
            .filter((file) => file && !file.startsWith('http'));

        const categories = files
            .map((file) => {
                const cleanFile = file.replace(/^\.\//, '').replace(/^\//, '');
                const normalizedFile = cleanFile.startsWith('questions/') ? cleanFile : `questions/${cleanFile}`;
                return {
                    file: normalizedFile,
                    label: toCategoryLabel(normalizedFile.replace(/^.*\//, '')),
                };
            })
            .filter(({ file }) => file.toLowerCase().endsWith('.html'));

        if (categories.length > 0) return categories;
    } catch (error) {
        console.warn('Using fallback quiz categories:', error);
    }

    return fallbackCategories;
}

async function renderCategoryButtons() {
    if (!categoryButtons) return;

    const categories = await loadQuestionCategories();
    categoryButtons.innerHTML = '';

    if (!categories.length) {
        const emptyState = document.createElement('p');
        emptyState.className = 'modal-empty-state';
        emptyState.textContent = 'No quiz categories are available yet.';
        categoryButtons.appendChild(emptyState);
        return;
    }

    categories.forEach((category) => {
        const button = document.createElement('a');
        button.className = 'modal-btn';
        button.href = category.file;
        button.textContent = category.label;
        categoryButtons.appendChild(button);
    });
}

startBtn?.addEventListener('click', openModal);
closeModalBtn?.addEventListener('click', closeModal);
modalOverlay?.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
        closeModal();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeModal();
    }
});

renderCategoryButtons();
