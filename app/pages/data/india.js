window.COUNTRY_DATA = window.COUNTRY_DATA || {};

COUNTRY_DATA.india = {
  currency: "₹",
  treatments: {
    // Cardiology & Cardiac Surgery
    angioplasty_ptca: { usd: [3800, 4200], local: [315400, 348600] },
    bypass_surgery_cabg: { usd: [6175, 6825], local: [512525, 566475] },
    heart_valve_replacement: { usd: [7600, 8400], local: [630800, 697200] },
    pacemaker_implantation: { usd: [3800, 4200], local: [315400, 348600] },
    cardiac_consultation_checkup: { usd: [190, 210], local: [15770, 17430] },

    // Orthopedics & Joint Replacement
    total_knee_replacement: { usd: [5700, 6300], local: [473100, 522900] },
    hip_replacement: { usd: [6650, 7350], local: [552295, 610605] },
    shoulder_elbow_replacement: { usd: [5225, 5775], local: [433675, 479325] },
    arthroscopy: { usd: [2850, 3150], local: [236550, 261450] },
    spinal_surgery: { usd: [6175, 6825], local: [512525, 566475] },

    // Neurology & Neurosurgery
    brain_tumor_surgery: { usd: [7125, 7875], local: [591375, 653625] },
    spine_surgery_cervical_lumbar: { usd: [5225, 5775], local: [433675, 479325] },
    deep_brain_stimulation: { usd: [19000, 21000], local: [1577000, 1743000] },
    epilepsy_surgery: { usd: [7600, 8400], local: [630800, 697200] },
    stroke_rehabilitation: { usd: [2850, 3150], local: [236550, 261450] },

    // Oncology (Cancer Treatment)
    chemotherapy: { usd: [475, 525], local: [39425, 43575] },
    radiation_therapy: { usd: [3800, 4200], local: [315400, 348600] },
    surgical_oncology: { usd: [4750, 5250], local: [394250, 435750] },
    bone_marrow_transplant: { usd: [28500, 31500], local: [2365500, 2614500] },
    cancer_second_opinion: { usd: [190, 210], local: [15770, 17430] },

    // Gastroenterology & Hepatology
    liver_transplant: { usd: [26600, 29400], local: [2207800, 2440620] },
    gallbladder_biliary_surgery: { usd: [2850, 3150], local: [236550, 261450] },
    bariatric_surgery: { usd: [4275, 4725], local: [354825, 392175] },
    endoscopy_colonoscopy: { usd: [190, 210], local: [15770, 17430] },
    gi_cancer_treatment: { usd: [6650, 7350], local: [552295, 610605] },

    // Urology & Nephrology
    kidney_transplant: { usd: [12350, 13650], local: [1025050, 1132950] },
    prostate_surgery_turp_laser: { usd: [1900, 2100], local: [157700, 174300] },
    kidney_stone_removal: { usd: [475, 525], local: [39425, 43575] },
    dialysis_per_session: { usd: [48, 52], local: [3984, 4316] },
    urethral_reconstruction: { usd: [3800, 4200], local: [315400, 348600] },

    // Gynecology & Fertility
    ivf_icsi_fertility_treatments: { usd: [3325, 3675], local: [275975, 305025] },
    hysterectomy: { usd: [3800, 4200], local: [315400, 348600] },
    laparoscopic_gynec_surgery: { usd: [2850, 3150], local: [236550, 261450] },
    surrogacy_assistance: { usd: [33250, 36750], local: [2759750, 3050250] },
    maternity_delivery_packages: { usd: [2375, 2625], local: [197125, 217875] },

    // Cosmetic & Plastic Surgery
    hair_transplant: { usd: [2850, 3150], local: [236550, 261450] },
    rhinoplasty_nose_job: { usd: [1900, 2100], local: [157700, 174300] },
    liposuction: { usd: [2375, 2625], local: [197125, 217875] },
    tummy_tuck_abdominoplasty: { usd: [3325, 3675], local: [275975, 305025] },
    breast_augmentation_reduction: { usd: [2850, 3150], local: [236550, 261450] },

    // Ophthalmology (Eye Care)
    cataract_surgery: { usd: [950, 1050], local: [78850, 87150] },
    lasik_refractive_surgery: { usd: [760, 840], local: [63080, 69720] },
    retinal_surgery: { usd: [1900, 2100], local: [157700, 174300] },
    glaucoma_treatment: { usd: [1425, 1575], local: [118275, 130725] },

    // ENT (Ear, Nose & Throat)
    cochlear_implant: { usd: [14250, 15750], local: [1182750, 1307250] },
    sinus_surgery: { usd: [2850, 3150], local: [236550, 261450] },
    tonsil_adenoid_removal: { usd: [1425, 1575], local: [118275, 130725] },
    ear_reconstruction: { usd: [3800, 4200], local: [315400, 348600] },

    // Dental & Oral Surgery
    dental_implants: { usd: [570, 630], local: [47310, 52290] },
    full_mouth_rehabilitation: { usd: [8550, 9450], local: [709650, 784350] },
    smile_design: { usd: [3325, 3675], local: [275975, 305025] },
    root_canal_treatment: { usd: [95, 105], local: [7885, 8715] },
    orthodontics_braces_aligners: { usd: [1425, 1575], local: [118275, 130725] },

    // Ayurveda, Wellness & Rejuvenation
    ayurvedic_detox_panchakarma: { usd: [1425, 1575], local: [118275, 130725] },
    stress_relief_mental_wellness: { usd: [1140, 1260], local: [94620, 104580] },
    weight_management: { usd: [1330, 1470], local: [110390, 122010] },
    yoga_naturopathy_packages: { usd: [950, 1050], local: [78850, 87150] }
  }
};
