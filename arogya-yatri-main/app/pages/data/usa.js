window.COUNTRY_DATA = window.COUNTRY_DATA || {};

COUNTRY_DATA.usa = {
  currency: "USD",
  treatments: {
    // Cardiology & Cardiac Surgery
    angioplasty_ptca: { usd: [0, 0], local: [0, 0] },
    bypass_surgery_cabg: { usd: [0, 0], local: [0, 0] },
    heart_valve_replacement: { usd: [0, 0], local: [0, 0] },
    pacemaker_implantation: { usd: [0, 0], local: [0, 0] },
    cardiac_consultation_checkup: { usd: [0, 0], local: [0, 0] },

    // Orthopedics & Joint Replacement
    total_knee_replacement: { usd: [33250, 36750], local: [33250, 36750] },
    hip_replacement: { usd: [28500, 31500], local: [28500, 31500] },
    shoulder_elbow_replacement: { usd: [23750, 26250], local: [23750, 26250] },
    arthroscopy: { usd: [11400, 12600], local: [11400, 12600] },
    spinal_surgery: { usd: [47500, 52500], local: [47500, 52500] },

    // Neurology & Neurosurgery
    brain_tumor_surgery: { usd: [95000, 105000], local: [95000, 105000] },
    spine_surgery_cervical_lumbar: { usd: [57000, 63000], local: [57000, 63000] },
    deep_brain_stimulation: { usd: [66500, 73500], local: [66500, 73500] },
    epilepsy_surgery: { usd: [76000, 84000], local: [76000, 84000] },
    stroke_rehabilitation: { usd: [47500, 52500], local: [47500, 52500] },

    // Oncology (Cancer Treatment)
    chemotherapy: { usd: [9500, 10500], local: [9500, 10500] },
    radiation_therapy: { usd: [47500, 52500], local: [47500, 52500] },
    surgical_oncology: { usd: [38000, 42000], local: [38000, 42000] },
    bone_marrow_transplant: { usd: [380000, 420000], local: [380000, 420000] },
    cancer_second_opinion: { usd: [4750, 5250], local: [4750, 5250] },

    // Gastroenterology & Hepatology
    liver_transplant: { usd: [285000, 315000], local: [285000, 315000] },
    gallbladder_biliary_surgery: { usd: [19000, 21000], local: [19000, 21000] },
    bariatric_surgery: { usd: [23750, 26250], local: [23750, 26250] },
    endoscopy_colonoscopy: { usd: [2850, 3150], local: [2850, 3150] },
    gi_cancer_treatment: { usd: [57000, 63000], local: [57000, 63000] },

    // Urology & Nephrology
    kidney_transplant: { usd: [0, 0], local: [0, 0] },
    prostate_surgery_turp_laser: { usd: [0, 0], local: [0, 0] },
    kidney_stone_removal: { usd: [0, 0], local: [0, 0] },
    dialysis_per_session: { usd: [0, 0], local: [0, 0] },
    urethral_reconstruction: { usd: [0, 0], local: [0, 0] },

    // Gynecology & Fertility
    ivf_icsi_fertility_treatments: { usd: [14250, 15750], local: [14250, 15750] },
    hysterectomy: { usd: [19000, 21000], local: [19000, 21000] },
    laparoscopic_gynec_surgery: { usd: [17100, 18900], local: [17100, 18900] },
    surrogacy_assistance: { usd: [114000, 126000], local: [114000, 126000] },
    maternity_delivery_packages: { usd: [14250, 15750], local: [14250, 15750] },

    // Cosmetic & Plastic Surgery
    hair_transplant: { usd: [11400, 12600], local: [11400, 12600] },
    rhinoplasty_nose_job: { usd: [7600, 8400], local: [7600, 8400] },
    liposuction: { usd: [6650, 7350], local: [6650, 7350] },
    tummy_tuck_abdominoplasty: { usd: [11400, 12600], local: [11400, 12600] },
    breast_augmentation_reduction: { usd: [9500, 10500], local: [9500, 10500] },

    // Ophthalmology (Eye Care)
    cataract_surgery: { usd: [0, 0], local: [0, 0] },
    lasik_refractive_surgery: { usd: [0, 0], local: [0, 0] },
    retinal_surgery: { usd: [0, 0], local: [0, 0] },
    glaucoma_treatment: { usd: [0, 0], local: [0, 0] },

    // ENT (Ear, Nose & Throat)
    cochlear_implant: { usd: [47500, 52500], local: [47500, 52500] },
    sinus_surgery: { usd: [11400, 12600], local: [11400, 12600] },
    tonsil_adenoid_removal: { usd: [5700, 6300], local: [5700, 6300] },
    ear_reconstruction: { usd: [14250, 15750], local: [14250, 15750] },

    // Dental & Oral Surgery
    dental_implants: { usd: [3800, 4200], local: [3800, 4200] },
    full_mouth_rehabilitation: { usd: [47500, 52500], local: [47500, 52500] },
    smile_design: { usd: [19000, 21000], local: [19000, 21000] },
    root_canal_treatment: { usd: [1140, 1260], local: [1140, 1260] },
    orthodontics_braces_aligners: { usd: [5700, 6300], local: [5700, 6300] },

    // Ayurveda, Wellness & Rejuvenation
    ayurvedic_detox_panchakarma: { usd: [4750, 5250], local: [4750, 5250] },
    stress_relief_mental_wellness: { usd: [3800, 4200], local: [3800, 4200] },
    weight_management: { usd: [4275, 4725], local: [4275, 4725] },
    yoga_naturopathy_packages: { usd: [3325, 3675], local: [3325, 3675] }
  }
};
