// questions.js - Quiz Logic
const QUIZ_DATA = [
    // ... (all 95 questions from the dataset)
    // For brevity, only showing first few questions here.
    // The full dataset should be included in this file.
    { question: "A young mother brings her 6-year-old Richard to a Pedia Clinic. The young mother wanted to know about the motor development APPROPRIATE in a preschooler. Which of the following statements is NOT true?", options: ["A. 'He can tie shoe lace.'", "B. 'He can alternate feet when climbing.'", "C. 'He has not developed good posture.'", "D. 'He can hop two or more times.'"], correct: 2, category: "Preschooler" },
  { question: "Healthy physical development is dependent upon nutrition, brain development, muscle and bone. Which of the following is NOT APPROPRIATE for physical development of a pre-schooler?", options: ["A. Sleeps 6 to 8 hours of sleep each day", "B. Assists in brushing and flossing teeth", "C. Gains 5 pounds per year", "D. Eruption of the primary teeth"], correct: 3, category: "Preschooler" },
  { question: "Her son starts asking her many questions about the things inside the Pediatric Clinic. You should inform the mother of which of the following statements?", options: ["A. Expected in a preschooler as they tend to ask many questions during this age", "B. Expected in toddlers only so he may have a delayed development", "C. Not normal in a preschooler so the mother may need to consult a child psychiatrist", "D. Impolite so the mother should discipline her son to stay quiet in public places"], correct: 0, category: "Preschooler" },
  { question: "You informed the mother about the normal psychosocial development of preschoolers. She correctly understands your health teaching if she verbalizes that:", options: ["A. He may have temper tantrums resulting from his frustration in wanting to do everything for himself", "B. He continues to react to separation from his parents", "C. Her son is more active with his parents and tends to be a bit selfish with his toys", "D. He may tend to exaggerate, boast, and tattle on others"], correct: 3, category: "Preschooler" },
  { question: "Before finishing the check-up, which of the following principles is NOT included among the principles of guidance in handling Richard?", options: ["A. Controlling temper tantrums", "B. Basing her expectations within the child's limitations", "C. Acceptance of masturbation as a normal phenomenon to be discouraged in public", "D. Reinforcing the correct use of language"], correct: 2, category: "Preschooler" },
  { question: "While assessing a newborn with cleft lip, the nurse should be alerted on which of the following that will MOST likely be compromised?", options: ["A. Locomotion", "B. Respiratory Status", "C. GI Function", "D. Sucking ability"], correct: 3, category: "Cleft Lip/Palate" },
  { question: "What is the MOST APPROPRIATE response of the nurse to the mother's question as to when the child will be ready for cleft palate repair? Cleft palate repair is usually done:", options: ["A. When a large-holed feeding bottle is ineffective for his feeding", "B. When the child is completely weaned from bottle feeding", "C. Prior to the development of speech", "D. After the child has been toilet trained"], correct: 2, category: "Cleft Lip/Palate" },
  { question: "Elbow restraints are the choice during the patient's operation. When is the right time to introduce the use of these restraints? It should be during the phase:", options: ["A. Pre-operative", "B. Rehabilitative", "C. Intra-operative", "D. Post-operative"], correct: 0, category: "Cleft Lip/Palate" },
  { question: "Before bringing the child to the operating room, what condition of the patient needs immediate notification of the surgeon by the nurse that will warrant suspension of surgery?", options: ["A. Colic", "B. Atopic dermatitis", "C. Nasopharyngitis", "D. Eye deviation"], correct: 2, category: "Cleft Lip/Palate" },
  { question: "Included in the post-op plan of care is collaboration and referral of the patient with cleft palate to which of the following APPROPRIATE health care provider?", options: ["A. Speech therapist", "B. Dentist", "C. Dietician", "D. Gynecologist"], correct: 0, category: "Cleft Lip/Palate" },
  { question: "Dosage, when giving medicine to pediatric patients, varies according to which of the following? Select all that apply:", options: ["A. Body Size, Surface area, Age of Child, Height", "B. Body Size, Surface area, Age of Child", "C. Body Size, Surface area", "D. Age of Child, Height"], correct: 0, category: "Pediatric Medications" },
  { question: "Nurse Mimi is being reviewed by her head nurse on administering oral medication on pediatric patients. Which of the following statements below is CORRECT?", options: ["A. The child should be told to place the tablet in the middle of his tongue and to drink water, fruit juice, milk in order to wash down the tablet.", "B. A child's reaction to a dose ordered by a physician is not less predictable than adult's reaction.", "C. When giving oral medication, the child as young as two years of age CANNOT be taught to swallow drugs.", "D. The possibility of errors is greater in giving of medication to children than to adults."], correct: 3, category: "Pediatric Medications" },
  { question: "In children and infants, which part is often used for intramuscular injection to reduce the risk of vascular and peripheral nerve (sciatic) injuries?", options: ["A. Deltoid muscle", "B. Gluteus maximus", "C. Dorsogluteal", "D. Vastus Lateralis"], correct: 3, category: "Pediatric Medications" },
  { question: "Comprehensive surveys of research reports and case study literature about intramuscular injections revealed that administering medication intramuscularly can produce a variety of serious adverse effects. When asked by the Head nurse what possible complications can arise, Nurse Mimi should include, which of the following?", options: ["A. Skin and tissue trauma", "B. Muscle fibrosis and contracture", "C. Nerve palsies and paralysis", "D. Infectious processes such as abscesses or gangrene"], correct: 1, category: "Pediatric Medications" },
  { question: "Prior to administering the drugs ordered by the pediatrician, Nurse Mimi needs to know if she is giving the ordered medication to the right patient. The FIRST step is:", options: ["A. Check patient's identification bracelet", "B. Compare medication order to identification bracelet and patient's stated name and birth date", "C. Verify patient's allergies with chart and with patient", "D. Ask patient to state their name and birth date"], correct: 3, category: "Pediatric Medications" },
  { question: "Nurse Juvy's assessment revealed the following: Heart Rate is 110 beats per minute, has a vigorous cry, moves actively and with good flexion, normal skin color and bluish extremities. What would be the APGAR Score of Baby Sharon?", options: ["A. 7 points", "B. 10 points", "C. 5 points", "D. 9 points"], correct: 3, category: "Newborn Assessment" },
  { question: "Baby Sharon was placed on phototherapy. What precaution should Nurse Juvy observe?", options: ["A. Put sunglasses on the newborn to protect his/her eyes", "B. Be certain that the newborn's intake is adequate", "C. Assess the newborn for symptoms of headache", "D. Keep the newborn wrapped to prevent sunburn"], correct: 0, category: "Newborn Assessment" },
  { question: "Physiologic jaundice among newborn babies usually occurs on, which of the following? It occurs:", options: ["A. Within 24 hours from birth", "B. 7 days after birth", "C. Upon birth", "D. Between the 2nd and the 3rd day after birth"], correct: 3, category: "Newborn Assessment" },
  { question: "If transient discoloration of Baby Sharon's skin is noted while under phototherapy, what is the phenomenon called?", options: ["A. Cyanosis", "B. Jaundice", "C. Hyperbilirubinemia", "D. Bronze baby syndrome"], correct: 3, category: "Newborn Assessment" },
  { question: "If Baby Sharon develops dehydration, what is the FIRST sign to look for by Nurse Juvy?", options: ["A. Oliguria", "B. Sunken fontanels", "C. Soft and depressed eyeballs", "D. Non-elastic skin/poor skin turgor on thighs and abdomen"], correct: 1, category: "Newborn Assessment" },
  { question: "Which of the following definition MOST accurately describes meningomyelocele? It is a:", options: ["A. Spinal cord tumor containing nerve roots", "B. Complete exposure of the spinal cord and meninges", "C. Herniation of spinal cord, cerebro-spinal fluid and meninges into a sac", "D. Sac formation containing meninges and spinal fluid"], correct: 2, category: "Spina Bifida" },
  { question: "The NICU nurse prepares for the arrival of the newborn. Which of the following PRIORITY item should be placed at the newborn's bedside?", options: ["A. Specific gravity unitometer", "B. Rectal thermometer", "C. Blood pressure cuff", "D. Bottle of sterile normal saline"], correct: 3, category: "Spina Bifida" },
  { question: "For this patient who is to undergo surgery (closure of the sac), what would be the PRIORITY nursing diagnosis? It is risk for:", options: ["A. Activity intolerance", "B. Infection", "C. Respiration", "D. Altered growth & development"], correct: 1, category: "Spina Bifida" },
  { question: "Which of the following is the PRIMARY reason for surgical repair of myelomeningocele? TO:", options: ["A. Decrease risk of infection", "B. Correct the neurologic defect", "C. Prevent seizure disorders", "D. Prevent hydrocephalus"], correct: 0, category: "Spina Bifida" },
  { question: "What would be the BEST response of the nurse when a mother with neural tube defect asks what she can do to decrease the chances of having another baby with the same defect?", options: ["A. 'Folic acid should be taken before and after conception.'", "B. 'Multivitamin supplements are recommended during pregnancy.'", "C. 'A well-balanced diet promotes normal fetal development.'", "D. 'Increased dietary iron improves the health of mother and fetus.'"], correct: 0, category: "Spina Bifida" },
  { question: "The toddler years are a time of great cognitive, emotional and social development. The toddler is a child _____ months old.", options: ["A. 6 to 12", "B. 9 to 36", "C. 36 to 48", "D. 12 to 36"], correct: 3, category: "Child Abuse/Toddler" },
  { question: "Upon seeing warning signs of child abuse, the BEST nursing action that Nurse Alma should make is to report the noted observation to the:", options: ["A. Dept of Social Welfare Development (DSWD)", "B. Head nurse", "C. Philippine National Police (PNP)", "D. Attending Pediatrician"], correct: 0, category: "Child Abuse/Toddler" },
  { question: "Nurse Alma recalls that there are four kinds of child abuse. Which of the following below are considered as child abuse? Select all that apply:", options: ["A. Physical, emotional", "B. Physical, emotional, sexual", "C. Physical, emotional, sexual, neglect", "D. Physical, emotional"], correct: 2, category: "Child Abuse/Toddler" },
  { question: "When there is a failure to supervise a child adequately, especially children younger than 12, the kind of child abuse is which of the following?", options: ["A. Emotional", "B. Sexual", "C. Neglect", "D. Physical"], correct: 2, category: "Child Abuse/Toddler" },
  { question: "Since Nadine is four years old, Nurse Alma needs to determine routines and rituals concerning which of the following, EXCEPT:", options: ["A. Feeding", "B. Toilet training", "C. Sleep pattern", "D. Favorite toy(s)"], correct: 3, category: "Child Abuse/Toddler" },
  { question: "Aira, student, 18 years old, primigravida, delivered to a baby boy forty hours ago. The patient has been seen crying and irritable. As her nurse, you know that Aira is experiencing 'baby blues'. Which is the BEST description of her condition? It is a condition in which the patient experiences some feelings of:", options: ["A. Excitement", "B. Euphoria", "C. Sadness", "D. Anxiety"], correct: 2, category: "Postpartum Baby Blues" },
  { question: "Which of the following is TRUE about baby blues? It is:", options: ["A. A condition that begins 6 to 12 months postpartum", "B. A serious condition that would warrant antidepressant therapy", "C. Related to hormonal changes", "D. Related to childhood poverty"], correct: 2, category: "Postpartum Baby Blues" },
  { question: "In planning to help Aira, the nurse has explained to her the cause of baby blues, which ONE is these?", options: ["A. Total increase in estrogen and progesterone", "B. Status quo in estrogen and progesterone", "C. Total decrease in estrogen and progesterone", "D. Increase or decrease on the levels of estrogen and progesterone"], correct: 2, category: "Postpartum Baby Blues" },
  { question: "As nurse, you should know the manifestations that Aira can present anytime. These are the following:", options: ["A. Crying, Anorexia, Feeling of inadequacy, Isolation, Disturbed sleep, Mood swings", "B. Anorexia, Feeling of inadequacy, Isolation, Disturbed sleep, Mood swings", "C. Crying, Anorexia, Feeling of inadequacy, Disturbed sleep, Mood swings", "D. Crying, Anorexia, Isolation, Disturbed sleep, Mood swings"], correct: 0, category: "Postpartum Baby Blues" },
  { question: "Which of the following nursing measures can help Aira in her condition?", options: ["A. Counseling", "B. Support", "C. Psychotherapy", "D. Mild anti-depressant"], correct: 1, category: "Postpartum Baby Blues" },
  { question: "While discussing prenatal care with a group of pregnant women, one of the women asks the nurse, 'What should I eat to ensure normal growth of my baby?' The nurse's response depends on an understanding of nutritional needs during pregnancy. Which of the following statements is INCORRECT about nutrition in pregnancy?", options: ["A. Weight is the best way to measure the woman's nutritional intake", "B. Adequate calcium can be provided by drinking 4 glasses of milk in a day", "C. There is a need to add 300 calories to the non-pregnant calorie intake of 1500 kcal/day", "D. Nutritional counselling should start with an assessment of the woman's daily intake: take a 24-hour diet history"], correct: 0, category: "Infant Development" },
  { question: "You encouraged a first-time mother to talk to her child, a 9-month-old girl, who at this age should be:", options: ["A. Saying 'dada'", "B. Cooing when talked to", "C. Obeying simple commands", "D. Vocalizing single syllables"], correct: 0, category: "Infant Development" },
  { question: "Another new mother is concerned about the developmental milestone of her son who is 7 months old. Which of the following statements by the new mother indicates that your health teaching was effective?", options: ["A. 'He can stand up from a sitting position.'", "B. 'My son can sit without support.'", "C. 'He can crawl.'", "D. 'He can drink from his training cup with minimal spilling.'"], correct: 1, category: "Infant Development" },
  { question: "Another baby, 6-month old was brought in by her mother who is concerned that her infant may have a delayed development. Upon assessment, you would expect the infant to:", options: ["A. Be able to hold a piece of a small snack with her finger and thumb", "B. Reach out for her toy", "C. Sit upright for a long period", "D. Hold her feeding bottle for a short while"], correct: 1, category: "Infant Development" },
  { question: "A young mother asks you about the attachment behaviors she would expect her 4-month-old son to demonstrate. Which of the following is NOT included in your health teaching?", options: ["A. The infant is friendly to strangers", "B. The infant follows his mother as she moves", "C. The infant greets his mother when she returns", "D. The infant recognizes and responds to his mother's voice"], correct: 0, category: "Infant Development" },
  { question: "The BEST reason why Nurse Hope opted to review Erikson's psychosocial theory is, which of the following statements?", options: ["A. Failure to master these tasks leads to feelings of inadequacy", "B. Helps children grow into successful and contributing members of the society", "C. Completion of task results in a sense of competence and a healthy personality", "D. We are motivated by the need to achieve competence in certain areas of our lives"], correct: 2, category: "Erikson's Theory" },
  { question: "Nurse Hope immediately responds to any cry from her pediatric patients because of which of the following reasons?", options: ["A. Lessen the noise overload in the Unit", "B. Attend to her patients who cannot communicate verbally", "C. Check if the child is hungry or wet", "D. Be a powerful influence over that individual's interactions with others for the remainder of his/her life"], correct: 3, category: "Erikson's Theory" },
  { question: "Nurse Hope is attending to a two-year-old Sheila, who is admitted due to chronic bronchitis. Sheila sports a long hair that extends up to her shoulder. As part of the morning care, Nurse Hope decided to style Sheila's hair into a pony tail. However, Sheila vehemently resisted her hair being tied by a rubber band. Hope's BEST thing to do is which of the following?", options: ["A. Deny Sheila's preference", "B. Allow Sheila's preference", "C. Explain that a pony tail would make Sheila more beautiful", "D. Assert her authority"], correct: 1, category: "Erikson's Theory" },
  { question: "Carlito, 17-years-old, is admitted due to influenza. He is admitted in a private room. In one of Nurse Hope's conversations with Carlito, the patient confessed that he is very unhappy with the program he is taking up in college as this is not his choice but rather the choice of his parents. In which of Erikson's stage of development does this case fall?", options: ["A. Autonomy versus shame/doubt", "B. Trust versus distrust", "C. Integrity versus despair", "D. Identity versus role confusion"], correct: 3, category: "Erikson's Theory" },
  { question: "Myla, 7 years old, is confined in the Pediatric Ward due to diarrhea. She is hooked to an intravenous infusion. Myla and family were taught to use the buzzer should they need something. Myla pressed the buzzer while her Yaya was sleeping when her IV was about to be consumed. The gesture of praising at this age is an example of which of the following?", options: ["A. Generativity", "B. Initiative", "C. Industry", "D. Autonomy"], correct: 1, category: "Erikson's Theory" },
  { question: "Karen, 5 years of age, is admitted to the pediatric ward due to severe otalgia, fever and irritability. Nurse Romana makes her INITIAL assessment on Karen. The patient keeps on crying and constantly pulls her right ear. What is her MOST APPROPRIATE action?", options: ["A. Assess the description and frequency of pain", "B. Take Karen's vital signs", "C. Request parent to carry the child", "D. Refer to the attending physician"], correct: 0, category: "Acute Otitis Media" },
  { question: "Nurse Romana is preparing to administer ofloxacin eardrop on Karen per Doctor's order. She needs to hold the bottle with her hands to warm up the solution to prevent dizziness for:", options: ["A. 10 minutes", "B. 5 minutes", "C. 8-5 minutes", "D. 1 to 2 minutes"], correct: 3, category: "Acute Otitis Media" },
  { question: "After washing her hands and gently cleaning an ear, Nurse Romana positions the child. Which of the following steps follows?", options: ["A. Gently press the tragus of the ear four times in a pumping motion", "B. Drop the medicine into the ear canal", "C. Gently pull the outer ear", "D. Keep the ear up for five minutes"], correct: 2, category: "Acute Otitis Media" },
  { question: "Based on her knowledge on otitis media, Nurse Romana recalls that children are predisposed to AOM due to their Eustachian tubes being, which of the following? Select all that apply:", options: ["A. Shorter, more horizontal, more prone to obstruction by enlarged adenoids", "B. Shorter, more horizontal", "C. Longer, more vertical", "D. Shorter, more horizontal, longer"], correct: 0, category: "Acute Otitis Media" },
  { question: "To promote drainage and reduce pressure from fluid, Nurse Romana's nursing intervention is to have the child assume any of the following position, EXCEPT:", options: ["A. Have the child sit up", "B. Put the pillows behind the head", "C. Lie on the non-affected area", "D. Lie on the affected ear"], correct: 3, category: "Acute Otitis Media" },
  { question: "Anton, 15 years old, has been informed that he is due for discharge. He had an emergency appendectomy. Anton is noted to be very conversant. To make her discharge instructions clear, Nurse Mimi should emphasize which of the following?", options: ["A. Tell Anton that he can clarify or ask questions, Tell him that it is alright to interrupt if he had to ask a question to clarify", "B. Advise him to listen well, Ask for the presence of his mother", "C. Tell Anton that he can clarify or ask questions, Advise him to listen well", "D. Tell him that it is alright to interrupt if he had to ask a question to clarify, Ask for the presence of his mother"], correct: 0, category: "Discharge Instructions" },
  { question: "Nurse Mimi's discharge instruction should contain which of the following?", options: ["A. Take home medications, if any; Date of follow up", "B. Activity and exercises; Diet", "C. Take home medications, if any; Date of follow up; Activity and exercises; Diet", "D. Date of follow up; Activity and exercises"], correct: 2, category: "Discharge Instructions" },
  { question: "To make Nurse Mimi's discharge instructions to be more effective the following strategies should be used, EXCEPT:", options: ["A. Treat him as a child", "B. Use simple understandable words", "C. Eye to eye contact to show interest on what is being said", "D. Ask for feedback"], correct: 0, category: "Discharge Instructions" },
  { question: "To get feedback on the discharge instructions, which question should Nurse Mimi ask?", options: ["A. Can you repeat to me what my instructions were?", "B. If you understood my instructions then you surely will be well", "C. Did you understand my instructions?", "D. Are my instructions clear?"], correct: 0, category: "Discharge Instructions" },
  { question: "The BEST statement of goodbye that Nurse Mimi is:", options: ["A. 'Bye Anton.'", "B. 'Bye Anton. See you again in the hospital.'", "C. 'Bye Anton. I don't want to see you again in the hospital.'", "D. 'Bye Anton. Remember all my instructions. Keep well.'"], correct: 3, category: "Discharge Instructions" },
  { question: "The factors that affect the ability of individuals to cope are ______. Select all that apply:", options: ["A. Level of development, Coping skills, Previous experiences with illness and hospitalization", "B. Level of development, Coping skills, Seriousness of diagnosis", "C. Level of development, Coping skills, Previous experiences with illness and hospitalization, Seriousness of diagnosis", "D. Coping skills, Previous experiences with illness and hospitalization, Seriousness of diagnosis"], correct: 2, category: "Developmental Stages" },
  { question: "Appropriate nursing diagnoses for patients with developmental problems are, EXCEPT:", options: ["A. Delayed growth and development", "B. Compromised family coping", "C. Impaired social interaction", "D. Altered sleeping pattern"], correct: 3, category: "Developmental Stages" },
  { question: "Patient's participation in the planning phase of the nursing diagnosis depends on ______. Select all that apply:", options: ["A. Developmental status, Psychological condition", "B. Developmental status, Level of intelligence", "C. Developmental status, Psychological condition, Level of intelligence, Comprehension of his disease", "D. Level of intelligence, Comprehension of his disease"], correct: 2, category: "Developmental Stages" },
  { question: "When a 15-year-old female patient is so engrossed and worried as to what her friends think about her, she is categorized to be in the psychosocial development stage. Nurse Nene needs to inform the mother that this is a normal behavior. In what stage of the psychosocial development is the patient in?", options: ["A. Identity versus Role Confusion", "B. Autonomy versus Doubt and Shame", "C. Industry versus Inferiority", "D. Initiative versus Guilt"], correct: 0, category: "Developmental Stages" },
  { question: "The Head nurse of pediatric ward asked a staff nurse who is assigned to a 3-month-old infant. 'At what age will her patient start to drink from a cup?' The staff nurse's answer should be ______.", options: ["A. 12 months", "B. 24 months", "C. 9 months", "D. 5 months"], correct: 3, category: "Developmental Stages" },
  { question: "A hospitalized adolescent Robbie suddenly has a seizure while his family visiting. Nurse Karen notes whole body rigidity followed by general jerking movements. Robbie vomits immediately after the seizure. Which of the following would be the PRIORITY nursing diagnosis for Robbie?", options: ["A. Fluid volume deficit related to vomiting", "B. Altered family processes related to chronic illness", "C. High risk for infection related to vomiting", "D. Risk for aspiration related to loss of consciousness"], correct: 3, category: "Seizure Disorder" },
  { question: "Which of the following would be the LEAST PRIORITY nursing care for a child with seizure disorder?", options: ["A. Observing and recording all seizures", "B. Ensuring safety and protection from injury", "C. Teaching the family about anticonvulsant drug therapy", "D. Assessing for signs and symptoms of increased intracranial pressure"], correct: 2, category: "Seizure Disorder" },
  { question: "Robbie will be taking phenytoin (Dilantin) regularly for seizure control. Which of the following will be the MOST important teaching to Robbie's family?", options: ["A. Administer acetaminophen to promote sleep", "B. Serve a diet that is high in iron", "C. Maintain good oral hygiene and dental care", "D. Omit medication if the child is seizure free"], correct: 2, category: "Seizure Disorder" },
  { question: "After teaching the parents about their child's unique psychological needs related to a seizure disorder and possible stressors, the nurse include which of the following additional teaching?", options: ["A. Feeling different from peers", "B. Cognitive delays", "C. Poor self-image", "D. Dependency"], correct: 0, category: "Seizure Disorder" },
  { question: "Which of the following is NOT a focus for teaching plan for an adolescent with a seizure disorder?", options: ["A. Obtaining driver's license", "B. Increase risk for infections", "C. Peer pressure", "D. Drug and alcohol use"], correct: 1, category: "Seizure Disorder" },
  { question: "When counseling parents of a child who has recently been diagnosed with hemophilia, what must Nurse Thelma KNOW about Billy's condition whose father is normal and the mother is the carrier?", options: ["A. It is likely that all sons are affected", "B. There is a 50% probability that sons will have the disease", "C. Every daughter is likely to be a carrier", "D. There is a 25% chance a daughter will be a carrier"], correct: 1, category: "Hemophilia" },
  { question: "Billy has slipped on the ice and bumped his knee. Which among the following should Nurse Thelma prepare to administer, as per doctor's order? Intravenous infusion of ______.", options: ["A. Cryoprecipitate", "B. Factor VIII", "C. Factor X", "D. Desmopressin (DDAVP)"], correct: 1, category: "Hemophilia" },
  { question: "Nurse Thelma is providing home care instructions to the mother of Billy. Which of the following complications should Nurse Thelma tell the mother, should repeated bleeding continues?", options: ["A. Leukemia", "B. Hemarthrosis", "C. Eczema", "D. Hematoma"], correct: 1, category: "Hemophilia" },
  { question: "A nurse analyzes the laboratory results of Billy. The nurse understands that the MOST likely ABNORMAL finding in Billy is which of the following?", options: ["A. Partial thromboplastin time", "B. Hemoglobin level", "C. Hematocrit level", "D. Platelet count"], correct: 0, category: "Hemophilia" },
  { question: "The nurse is planning a meal that would provide IRON for a child with bleeding disorders. Which dinner menu would be the BEST?", options: ["A. Chicken nuggets, macaroni, peas, cantaloupe, milk", "B. Fish sticks, french fries, banana, cookies, milk", "C. Ground beef patty, lima beans, wheat roll, raisins, milk", "D. Peanut butter and jelly sandwich, apple slices, milk"], correct: 2, category: "Iron-Rich Diet" },
  { question: "The mother asks the head nurse why the pediatrician recommended that closure of palate should be done before he is 6 months old. She asked Nurse Donna to answer her. Which of the following is Nurse Donna's APPROPRIATE response?", options: ["A. 'After age 2, surgery is very frightening and should be avoided if possible'", "B. 'The eruption of the 2-year-molars often complicates the surgical procedure'", "C. 'Surgery should be performed before the child starts to use faulty speech patterns'", "D. 'As he gets older the palate gets wider and more difficult to repair'"], correct: 2, category: "Cleft Lip/Palate" },
  { question: "The head nurse continued to ask Nurse Donna, a cleft lip predisposes to infections PRIMARILY because of which of the following reasons?", options: ["A. Wasted products that accumulate along the defect", "B. Inadequate circulation in defective area", "C. Deficient nutrition from ineffective feeding", "D. Mouth breathing that dries the oropharyngeal mucosa membranes"], correct: 0, category: "Cleft Lip/Palate" },
  { question: "Which SIGNIFICANT statement of the mother predisposes her son to cleft lip or palate?", options: ["A. 'On my 6 months of pregnancy, I saw a rabbit with the same case of my son'", "B. 'I am asthmatic and I usually take steroids'", "C. 'My mother-in-law doesn't like me, that's why she cursed me.'", "D. 'I believe my enemy did some forms of witchcraft on me'"], correct: 1, category: "Cleft Lip/Palate" },
  { question: "For an infant born with a unilateral cleft lip and palate, which of the following type of feeding will be BEST to use?", options: ["A. Rubber-tipped syringe or medicine dropper", "B. Full breast feeding", "C. IV fluids on limited number of ounces", "D. Cross-cut rubber nipple"], correct: 0, category: "Cleft Lip/Palate" },
  { question: "Which of the following is the number ONE consideration in the care of an infant after the surgical repair of a cleft lip?", options: ["A. Preventing the infant from crying", "B. Feeding the infant with spoon for 2 days after surgery", "C. Placing the infant in a semi-sitting position", "D. Keeping the infant NPO for 1 day after surgery"], correct: 2, category: "Cleft Lip/Palate" },
  { question: "Adel, 16 years old, was recently diagnosed with Type 1 Diabetes. She will receive NPH (Novolin N) insulin subcutaneously. When planning a teaching program for a child who has recently been diagnosed with type 1 diabetes, what will be the nurse's FIRST concern for Adel and her parents? To let them:", options: ["A. Assess their own feelings about diabetes", "B. Learn how to monitor blood glucose level", "C. Understand why activities must be limited", "D. Learn how to administer insulin injections"], correct: 0, category: "Type 1 Diabetes" },
  { question: "An evening snack is planned for Adel receiving NPH (Novolin N) insulin. This will provide:", options: ["A. Encouragement for the child to stay on diet", "B. Calories to help the child gain weight", "C. Nourishment to counteract late insulin activity", "D. Energy for immediate utilization"], correct: 2, category: "Type 1 Diabetes" },
  { question: "When teaching about insulin and its potential for hypoglycaemia, the nurse should include that its PEAK EFFECT occurs in which number of HOURS?", options: ["A. 1 to 2", "B. 5 to 10", "C. 4 to 12", "D. 2 to 4"], correct: 2, category: "Type 1 Diabetes" },
  { question: "When teaching Adel on dietary management, what should the nurse emphasize MOST?", options: ["A. Food in the form of concentrated glucose should be available all the time", "B. Meals should preferably be prepared and eaten at home", "C. Food should be weighed on a gram scale all the time", "D. Meals should be prepared separately from the rest of the family"], correct: 0, category: "Type 1 Diabetes" },
  { question: "At 7 AM, the nurse receives the information that Adel has a 6 AM fasting blood glucose level of 180 mg/dL. What should be her PRIORITY nursing action?", options: ["A. Inform Adel that a complex carbohydrate such as cheese should be eaten", "B. Encourage Adel to start exercising and to continue for 5 minutes", "C. Tell Adel that the prescribed dose of regular insulin should be administered", "D. Ask Adel to obtain again an immediate glucometer reading"], correct: 3, category: "Type 1 Diabetes" },
  { question: "Liza learned active listening. How will Liza demonstrate this on her patient named Grace? She should:", options: ["A. Listen to what Grace verbalizes and observe how she expresses her feelings", "B. Demonstrate interest on what Grace is talking about by avoiding her eyes", "C. Maintain a close body posture such as keeping arms crossed and clenching fist", "D. Tune out other thoughts and refrain from interrupting Grace while she is talking"], correct: 0, category: "Communication" },
  { question: "Which of the following should NOT be considered by the nurse in interpreting nonverbal messages of a patient?", options: ["A. Culture, educational attainment and position in society", "B. Congruency of nonverbal expressions with spoken words", "C. Facial expression, posture, tone of voice and age", "D. Eye contact with all patients at all times regardless of race"], correct: 3, category: "Communication" },
  { question: "Demonstrating what she learned from school in terms of obtaining feedback, Liza's APPROPRIATE response to Grace's complaint, 'My breasts are engorged and it is so painful,' should be:", options: ["A. 'Tell me about the pain. Is it tolerated, moderate or severe?'", "B. 'It is alright all breastfeeding mothers feel the same as you.'", "C. 'That's a sacrifice that mothers should do for her babies.'", "D. 'Just continue breastfeeding, it will relieve you from your pain.'"], correct: 0, category: "Communication" },
  { question: "Liza also recalled her learning on how to REFOCUS conversations. Thus, when Grace's subsequent messages were, 'I have this painful engorged breasts and my mother-in-law wants me to bottle-feed instead of breastfeeding.' What will be Liza's BEST answer using refocusing technique?", options: ["A. 'What were you saying about your mother-in-law?'", "B. 'All mothers-in-law are just as helpful, so it will be better to just accept her.'", "C. 'I think we were talking about breast engorgement which brought you about.'", "D. 'What did you do about the pain you felt on your breast?'"], correct: 3, category: "Communication" },
  { question: "In the course of Liza's duty in the OB Ward, she also learned that she has to adjust her style of communication for different types of patients. Thus, Liza should adjust to which of the following characteristics of Grace? Select all that apply:", options: ["A. Level of usual communication, Pace of interaction, Display of emotions, Full development of topic", "B. Level of usual communication, Pace of interaction", "C. Display of emotions, Full development of topic", "D. Level of usual communication, Pace of interaction, Display of emotions"], correct: 0, category: "Communication" },
  { question: "The goal of a neutral thermal environment is to assist the newborns to stabilize its temperature that does not drop below which of the following.", options: ["A. 98.6 degree F", "B. 99.5 degrees F", "C. 97.7 degrees F", "D. 96.7 degrees F"], correct: 2, category: "Preterm Newborns" },
  { question: "Nurses should be alert when caring for a preterm newborn, particularly for which of the following signs.", options: ["A. Hypercalcemia", "B. Premature closure of ductus arteriosus", "C. Meconium aspiration syndrome", "D. Hypoglycemia"], correct: 3, category: "Preterm Newborns" },
  { question: "The nurse starts giving information about preterm newborns to the parent. She tells them that preterm newborns exhibit which of the following characteristics/signs?", options: ["A. Allow elbows to be brought past the midline of the chest", "B. Exhibit an abundance of brown fat", "C. Resist when the right heel is brought to the right ear", "D. Assume significant flexed posture"], correct: 0, category: "Preterm Newborns" },
  { question: "Hypothermia is common in preterm newborns because of their inability to control heat. Which of the following is an EXCEPTION to the APPROPRIATE nursing intervention to prevent heat loss?", options: ["A. Using mechanical pressure", "B. Drying and wrapping the baby", "C. Placing the crib beside the wall", "D. Doing Kangaroo care"], correct: 2, category: "Preterm Newborns" },
  { question: "Which of the following conditions is NOT INCLUDED among the effects of cold stress?", options: ["A. Hypoglycemia", "B. Metabolic acidosis", "C. Increase intracranial pressure", "D. Cerebral palsy"], correct: 3, category: "Preterm Newborns" },
  { question: "Thelma, a mother of a 6-year-old boy Marco has arrived at school to take her child home because the school Nurse James has verified that he has an inflamed throat. Nurse James urges his mother to seek treatment because if the causative agent is beta-hemolytic streptococcus, he may develop a disorder characterized by inflamed joints, fever, and the possibility of endocarditis. Which of the following would be the possible disorder?", options: ["A. Tetanus", "B. Rheumatic fever", "C. Scarlet fever", "D. Influenza"], correct: 1, category: "Rheumatic Fever" },
  { question: "Alice's mother questions whether her other children can catch the same disease. Which of the following should be the nurse's response?", options: ["A. Your other children should be taking antibiotics to prevent them from catching the same disease", "B. It is caused by an autoimmune reaction and it is not contagious", "C. You appear concerned that your daughter's disease is contagious", "D. The fact that you brought Alice to the hospital early enough will decrease the chance for her siblings getting it"], correct: 1, category: "Rheumatic Fever" },
  { question: "In addition to carditis, which of the following should the nurse assess the child? It should be for the presence of:", options: ["A. Oliguria and edema", "B. Malabsorption and diarrhea", "C. Arthralgia and low grade fever", "D. Bronchitis and pneumonia"], correct: 2, category: "Rheumatic Fever" },
  { question: "After throat swab for culture and sensitivity, the nurse would expect the physician to prescribe an appropriate antibiotic. Which of the following is the purpose of this medication? It is to prevent:", options: ["A. Recurrence", "B. Transmission", "C. Inhalation", "D. Inflammation"], correct: 0, category: "Rheumatic Fever" },
  { question: "If left untreated, such condition can progress to which of the following complications?", options: ["A. Kidney failure", "B. Left-sided heart failure", "C. Right-sided heart failure", "D. Angina pectoris"], correct: 1, category: "Rheumatic Fever" }
];

(function() {
    const total = QUIZ_DATA.length;
    let currentIndex = 0;
    const userAnswers = new Array(total).fill(-1);
    let quizCompleted = false;

    // DOM refs
    const qNumber = document.getElementById('qNumber');
    const qCategory = document.getElementById('qCategory');
    const qText = document.getElementById('qText');
    const optionsContainer = document.getElementById('optionsContainer');
    const feedbackArea = document.getElementById('feedbackArea');
    const nextBtn = document.getElementById('nextBtn');
    const progressDisplay = document.getElementById('progressDisplay');
    const scoreDisplay = document.getElementById('scoreDisplay');
    const answeredDisplay = document.getElementById('answeredDisplay');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalScore = document.getElementById('modalScore');
    const modalPercentage = document.getElementById('modalPercentage');
    const modalMessage = document.getElementById('modalMessage');
    const resetFromModalBtn = document.getElementById('resetFromModalBtn');

    function renderQuestion() {
        if (quizCompleted) return;

        const q = QUIZ_DATA[currentIndex];
        const idx = currentIndex;
        const selected = userAnswers[idx];

        qNumber.textContent = `Q${idx + 1}`;
        qCategory.textContent = q.category || 'General';
        qText.textContent = q.question;

        let html = '';
        const labels = ['A', 'B', 'C', 'D'];
        q.options.forEach((opt, i) => {
            let classes = 'option-item';
            if (selected !== -1) classes += ' disabled-opt';
            if (selected === i) classes += ' selected';
            if (selected !== -1) {
                if (i === q.correct) classes += ' correct-reveal';
                else if (selected === i && i !== q.correct) classes += ' wrong-reveal';
            }
            html += `<div class="${classes}" data-optindex="${i}">
                <span class="option-label">${labels[i] || ''}</span>
                <span class="option-text">${opt}</span>
            </div>`;
        });
        optionsContainer.innerHTML = html;

        if (selected === -1) {
            document.querySelectorAll('.option-item').forEach(el => {
                el.addEventListener('click', function(e) {
                    const optIdx = parseInt(this.dataset.optindex, 10);
                    handleOptionClick(optIdx);
                });
            });
        }

        if (selected !== -1) {
            const isCorrect = (selected === q.correct);
            feedbackArea.innerHTML = `<span>${isCorrect ? '✅ Correct!' : '❌ Incorrect.'} The correct answer is ${q.options[q.correct]}</span>`;
        } else {
            feedbackArea.innerHTML = `<span>💡 Select an option to check</span>`;
        }

        // Update Next button text
        if (currentIndex === total - 1) {
            nextBtn.textContent = '🏁 Finish';
        } else {
            nextBtn.textContent = 'Next ▶';
        }

        // Check if all questions are answered
        updateStats();
    }

    function handleOptionClick(optIndex) {
        const idx = currentIndex;
        if (userAnswers[idx] !== -1) return;
        userAnswers[idx] = optIndex;
        renderQuestion();

        // Auto-advance to next question after a short delay
        const q = QUIZ_DATA[idx];
        const isCorrect = (optIndex === q.correct);
        const delay = isCorrect ? 800 : 1500;

        setTimeout(() => {
            if (currentIndex === total - 1) {
                // If last question, check completion
                const allAnswered = userAnswers.every(ans => ans !== -1);
                if (allAnswered) {
                    completeQuiz();
                }
            } else {
                nextQuestion();
            }
        }, delay);
    }

    function nextQuestion() {
        if (quizCompleted) return;

        if (currentIndex < total - 1) {
            currentIndex++;
            renderQuestion();
        } else {
            const allAnswered = userAnswers.every(ans => ans !== -1);
            if (allAnswered) {
                completeQuiz();
            } else {
                feedbackArea.innerHTML = `<span>⚠️ Please answer all questions before finishing.</span>`;
            }
        }
    }

    function completeQuiz() {
        quizCompleted = true;
        let correct = 0;
        let answered = 0;
        for (let i = 0; i < total; i++) {
            if (userAnswers[i] !== -1) {
                answered++;
                if (userAnswers[i] === QUIZ_DATA[i].correct) correct++;
            }
        }

        // Show modal
        const percentage = Math.round((correct / total) * 100);
        modalScore.textContent = `${correct}/${total}`;
        modalPercentage.textContent = `${percentage}%`;

        let message = '';
        if (percentage >= 90) message = '🌟 Excellent! You\'re a pediatric nursing expert!';
        else if (percentage >= 75) message = '👏 Great job! You have solid knowledge!';
        else if (percentage >= 60) message = '📖 Good effort! Review the topics you missed.';
        else message = '💪 Keep studying! You\'ll improve with practice.';
        modalMessage.textContent = message;

        modalOverlay.classList.add('active');
        nextBtn.disabled = true;

        updateStats();
    }

    function updateStats() {
        let correct = 0;
        let answered = 0;
        for (let i = 0; i < total; i++) {
            if (userAnswers[i] !== -1) {
                answered++;
                if (userAnswers[i] === QUIZ_DATA[i].correct) correct++;
            }
        }
        scoreDisplay.textContent = `✅ ${correct} correct`;
        answeredDisplay.textContent = `📌 ${answered} answered`;
        progressDisplay.textContent = `${Math.min(currentIndex + 1, total)} / ${total}`;
    }

    function resetQuiz() {
        for (let i = 0; i < total; i++) userAnswers[i] = -1;
        currentIndex = 0;
        quizCompleted = false;
        nextBtn.disabled = false;
        modalOverlay.classList.remove('active');
        renderQuestion();
    }

    // Event listeners
    nextBtn.addEventListener('click', nextQuestion);
    resetFromModalBtn.addEventListener('click', resetQuiz);

    // Close modal on overlay click (but not on content click)
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === this) {
            // Don't close on overlay click - user must click a button
        }
    });

    // Initial render
    renderQuestion();
})();