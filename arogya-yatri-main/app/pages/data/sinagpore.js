window.COUNTRY_DATA = window.COUNTRY_DATA || {};

COUNTRY_DATA.singapore = {
  currency: "SGD",
  treatments: {
    // Cardiology & Cardiac Surgery
    angioplasty_ptca: { usd: [23750, 26250], local: [32063, 35438] },
    bypass_surgery_cabg: { usd: [28500, 31500], local: [38475, 42525] },
    heart_valve_replacement: { usd: [33250, 36750], local: [44888, 49613] },
    pacemaker_implantation: { usd: [13300, 14700], local: [17955, 19845] },
    cardiac_consultation_checkup: { usd: [475, 525], local: [641, 709] },

    // Orthopedics & Joint Replacement
    total_knee_replacement: { usd: [23750, 26250], local: [32063, 35438] },
    hip_replacement: { usd: [23750, 26250], local: [32063, 35438] },
    shoulder_elbow_replacement: { usd: [23750, 26250], local: [32063, 35438] },
    arthroscopy: { usd: [11400, 12600], local: [15390, 17010] },
    spinal_surgery: { usd: [23750, 26250], local: [32063, 35438] },

    // Neurology & Neurosurgery
    brain_tumor_surgery: { usd: [28500, 31500], local: [38475, 42525] },
    spine_surgery_cervical_lumbar: { usd: [20900, 23100], local: [28215, 31185] },
    deep_brain_stimulation: { usd: [52250, 57750], local: [70538, 77963] },
    epilepsy_surgery: { usd: [26600, 29400], local: [35910, 39690] },
    stroke_rehabilitation: { usd: [17100, 18900], local: [23085, 25515] },

    // Oncology (Cancer Treatment)
    chemotherapy: { usd: [3800, 4200], local: [5130, 5670] },
    radiation_therapy: { usd: [23750, 26250], local: [32063, 35438] },
    surgical_oncology: { usd: [28500, 31500], local: [38475, 42525] },
    bone_marrow_transplant: { usd: [142500, 157500], local: [192375, 212625] },
    cancer_second_opinion: { usd: [1425, 1575], local: [1924, 2126] },

    // Gastroenterology & Hepatology
    liver_transplant: { usd: [47500, 52500], local: [64125, 70875] },
    gallbladder_biliary_surgery: { usd: [7600, 8400], local: [10260, 11340] },
    bariatric_surgery: { usd: [11400, 12600], local: [15390, 17010] },
    endoscopy_colonoscopy: { usd: [760, 840], local: [1026, 1134] },
    gi_cancer_treatment: { usd: [27075, 29925], local: [36551, 40399] },

    // Urology & Nephrology
    kidney_transplant: { usd: [47500, 52500], local: [64125, 70875] },
    prostate_surgery_turp_laser: { usd: [7600, 8400], local: [10260, 11340] },
    kidney_stone_removal: { usd: [4750, 5250], local: [6413, 7088] },
    dialysis_per_session: { usd: [380, 420], local: [513, 567] },
    urethral_reconstruction: { usd: [11400, 12600], local: [15390, 17010] },

    // Gynecology & Fertility
    ivf_icsi_fertility_treatments: { usd: [6650, 7350], local: [8978, 9923] },
    hysterectomy: { usd: [6650, 7350], local: [8978, 9923] },
    laparoscopic_gynec_surgery: { usd: [6650, 7350], local: [8978, 9923] },
    surrogacy_assistance: { usd: [47500, 52500], local: [64125, 70875] },
    maternity_delivery_packages: { usd: [6650, 7350], local: [8978, 9923] },

    // Cosmetic & Plastic Surgery
    hair_transplant: { usd: [3800, 4200], local: [5130, 5670] },
    rhinoplasty_nose_job: { usd: [3800, 4200], local: [5130, 5670] },
    liposuction: { usd: [3800, 4200], local: [5130, 5670] },
    tummy_tuck_abdominoplasty: { usd: [3800, 4200], local: [5130, 5670] },
    breast_augmentation_reduction: { usd: [3800, 4200], local: [5130, 5670] },

    // Ophthalmology (Eye Care)
    cataract_surgery: { usd: [3325, 3675], local: [4489, 4961] },
    lasik_refractive_surgery: { usd: [2850, 3150], local: [3848, 4253] },
    retinal_surgery: { usd: [4750, 5250], local: [6413, 7088] },
    glaucoma_treatment: { usd: [3800, 4200], local: [5130, 5670] },

    // ENT (Ear, Nose & Throat)
    cochlear_implant: { usd: [28500, 31500], local: [38475, 42525] },
    sinus_surgery: { usd: [2850, 3150], local: [3848, 4253] },
    tonsil_adenoid_removal: { usd: [2850, 3150], local: [3848, 4253] },
    ear_reconstruction: { usd: [6650, 7350], local: [8978, 9923] },

    // Dental & Oral Surgery
    dental_implants: { usd: [2375, 2625], local: [3206, 3544] },
    full_mouth_rehabilitation: { usd: [23750, 26250], local: [32063, 35438] },
    smile_design: { usd: [11400, 12600], local: [15390, 17010] },
    root_canal_treatment: { usd: [570, 630], local: [770, 851] },
    orthodontics_braces_aligners: { usd: [4275, 4725], local: [5771, 6379] },

    // Ayurveda, Wellness & Rejuvenation
    ayurvedic_detox_panchakarma: { usd: [0, 0], local: [0, 0] },
    stress_relief_mental_wellness: { usd: [0, 0], local: [0, 0] },
    weight_management: { usd: [0, 0], local: [0, 0] },
    yoga_naturopathy_packages: { usd: [0, 0], local: [0, 0] }
  }
};
