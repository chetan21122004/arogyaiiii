window.COUNTRY_DATA = window.COUNTRY_DATA || {};

COUNTRY_DATA.germany = {
  currency: "€",
  treatments: {
    // Cardiology & Cardiac Surgery
    angioplasty_ptca: { usd: [5700, 6300], local: [5280, 5832] },
    bypass_surgery_cabg: { usd: [19000, 21000], local: [17592, 19440] },
    heart_valve_replacement: { usd: [42750, 47250], local: [39582, 43794] },
    pacemaker_implantation: { usd: [11400, 12600], local: [10560, 11664] },
    cardiac_consultation_checkup: { usd: [285, 315], local: [264, 292] },

    // Orthopedics & Joint Replacement
    total_knee_replacement: { usd: [17100, 18900], local: [15840, 17510] },
    hip_replacement: { usd: [19000, 21000], local: [17592, 19440] },
    shoulder_elbow_replacement: { usd: [14250, 15750], local: [13176, 14580] },
    arthroscopy: { usd: [7600, 8400], local: [7040, 7776] },
    spinal_surgery: { usd: [20900, 23100], local: [19360, 21384] },

    // Neurology & Neurosurgery
    brain_tumor_surgery: { usd: [23750, 26250], local: [21960, 24300] },
    spine_surgery_cervical_lumbar: { usd: [19000, 21000], local: [17592, 19440] },
    deep_brain_stimulation: { usd: [38000, 42000], local: [35184, 38880] },
    epilepsy_surgery: { usd: [20900, 23100], local: [19360, 21384] },
    stroke_rehabilitation: { usd: [14250, 15750], local: [13176, 14580] },

    // Oncology (Cancer Treatment)
    chemotherapy: { usd: [2850, 3150], local: [2640, 2916] },
    radiation_therapy: { usd: [19000, 21000], local: [17592, 19440] },
    surgical_oncology: { usd: [23750, 26250], local: [21960, 24300] },
    bone_marrow_transplant: { usd: [190000, 210000], local: [175920, 194400] },
    cancer_second_opinion: { usd: [950, 1050], local: [880, 972] },

    // Gastroenterology & Hepatology
    liver_transplant: { usd: [237500, 262500], local: [219600, 243000] },
    gallbladder_biliary_surgery: { usd: [9500, 10500], local: [8800, 9720] },
    bariatric_surgery: { usd: [14250, 15750], local: [13176, 14580] },
    endoscopy_colonoscopy: { usd: [950, 1050], local: [880, 972] },
    gi_cancer_treatment: { usd: [47500, 52500], local: [43920, 48600] },

    // Urology & Nephrology
    kidney_transplant: { usd: [95000, 105000], local: [87960, 97200] },
    prostate_surgery_turp_laser: { usd: [8550, 9450], local: [7920, 8748] },
    kidney_stone_removal: { usd: [5700, 6300], local: [5280, 5832] },
    dialysis_per_session: { usd: [285, 315], local: [264, 292] },
    urethral_reconstruction: { usd: [14250, 15750], local: [13176, 14580] },

    // Gynecology & Fertility
    ivf_icsi_fertility_treatments: { usd: [5225, 5775], local: [4840, 5346] },
    hysterectomy: { usd: [11400, 12600], local: [10560, 11664] },
    laparoscopic_gynec_surgery: { usd: [9500, 10500], local: [8800, 9720] },
    surrogacy_assistance: { usd: [0, 0], local: [0, 0] },
    maternity_delivery_packages: { usd: [7600, 8400], local: [7040, 7776] },

    // Cosmetic & Plastic Surgery
    hair_transplant: { usd: [5700, 6300], local: [5280, 5832] },
    rhinoplasty_nose_job: { usd: [6650, 7350], local: [6160, 6804] },
    liposuction: { usd: [5700, 6300], local: [5280, 5832] },
    tummy_tuck_abdominoplasty: { usd: [8550, 9450], local: [7920, 8748] },
    breast_augmentation_reduction: { usd: [7600, 8400], local: [7040, 7776] },

    // Ophthalmology (Eye Care)
    cataract_surgery: { usd: [1900, 2100], local: [1760, 1944] },
    lasik_refractive_surgery: { usd: [2375, 2625], local: [2200, 2430] },
    retinal_surgery: { usd: [5700, 6300], local: [5280, 5832] },
    glaucoma_treatment: { usd: [6175, 6825], local: [5720, 6318] },

    // ENT (Ear, Nose & Throat)
    cochlear_implant: { usd: [28500, 31500], local: [26376, 29160] },
    sinus_surgery: { usd: [7600, 8400], local: [7040, 7776] },
    tonsil_adenoid_removal: { usd: [3800, 4200], local: [3520, 3888] },
    ear_reconstruction: { usd: [9500, 10500], local: [8800, 9720] },

    // Dental & Oral Surgery
    dental_implants: { usd: [1140, 1260], local: [1056, 1166] },
    full_mouth_rehabilitation: { usd: [19000, 21000], local: [17592, 19440] },
    smile_design: { usd: [7600, 8400], local: [7040, 7776] },
    root_canal_treatment: { usd: [380, 420], local: [352, 389] },
    orthodontics_braces_aligners: { usd: [3325, 3675], local: [3080, 3402] },

    // Ayurveda, Wellness & Rejuvenation
    ayurvedic_detox_panchakarma: { usd: [3800, 4200], local: [3520, 3888] },
    stress_relief_mental_wellness: { usd: [3325, 3675], local: [3080, 3402] },
    weight_management: { usd: [3610, 3990], local: [3344, 3694] },
    yoga_naturopathy_packages: { usd: [2850, 3150], local: [2640, 2916] }
  }
};
