let productDetails = document.getElementById("rowData");
var btn1 = document.getElementById("btn-1");
var btn2 = document.getElementById("btn-2");
var learnMore = document.getElementById("learnMore");
//!  productContainer-----------------------------------------------------------------
let product = [
  {
    id: 1,
    image: "images/1.webp",
    title: "Brand D3",
    body: `Brand D3 400 Drop contains 400 IU of vitamin D3 as (cholecalciferol 10 mcg).
                Brand D3 400 Drop presents in the form  naturally found in the body and blended with premium quality of Organic Extra Virgin Olive Oil.
                Brand D3 400 Drop is the preferred from of vitamin D for supplementation, due to the higher bioavailability and absorption of vitamin by the body in the liquid form.
                Brand D3 400 Drop is specifically designed for breastfed or partially breastfed infants.
                Brand D3 400 Drop  perfectly suited to breast feeding babies with a convenient dose,
                as it only One dropper delivers 400 IU of vitamin D3 (Cholecalciferol 10 mcg), 
                that does which recommended from the American Academy of Pediatrics.
                D3 400 Drop is an ideal formula for breastfed infants as it will not interfere with feeding , sugarless formula has no artificial colors, flavors, or preservatives. 
                Brand D3 400 Drop suitable for children aged 0-4 years
                
                `,
    indicationsTitle: "Indications:",
    indicationDesc: `Brand D3 : supports the infant's general health and wellbeing. 
                D3 400 Drop assists healthy bone and teeth development, helps increase dietary calcium absorption, 
                supports bone mineralization, supports muscle function,
                and maintains healthy immune system function.`,
    doseTitle: "Dose:",
    dose: `
                one dropper (1ml) once daily for infants less than 12 months.
                `,
    PackingTitle: "Packing: ",
    PackingDesc: ` bottel 30 ml`,
  },
  {
    id: 2,
    image: "images/2.webp",
    title: "zimicolina",
    body: `Citicoline (Each 5 ml contains 500 mg ):
    Citicoline improving the level of attention and consciousness,
                for amnesia & cognitive and neurological disorders associated to stroke or traumatic brain injuries
                `,
    indicationsTitle: "Indications:",
    indicationDesc: `Cognitive and neurological disorders associated with stroke , traumatic brain injuries.
    `,
    doseTitle: "Dose:",
    dose: `2.5 ml of zimicolina syrup , 1-2 times a day ,
    or as prescribed by the physician`,
    PackingTitle: "Packing: ",
    PackingDesc: `Box contains plastic bottle , which contains 30 ml of zimicolina Syrup `,
  },
  {
    id: 3,
    image: "images/3.webp",
    title: "kashkids",
    body: `Multivitamin Syrup 120 ml
                includes a range of 15 vitamins and minerals to help maintain all round health. 
                The syrup contains Vitamin B Complex plus vitamins (A, E, C, D3) plus minerals including (iron, iodine, zinc, copper,folic acid). 
                Kashkids : 
                Multivitamin Liquid is the first ever comprehensive multivitamin liquid just for kids , which provides an easy way to help safeguard the nutritional intake of childern aged 4-12 years.
                `,
    indicationsTitle: "Indications:",
    indicationDesc: `
                For fussy eaters kids
                Vegetarian kids
                Support for normal cognitive development of children
                Support for normal immune system function for children
                `,
    doseTitle: "Dose:",
    dose: `
                For children aged 4-10 years old:
                1 teaspoonful (5 ml) daily
                - For children aged 11-12 years old: 
                2 teaspoonful (10ml) daily
                `,
    PackingTitle: "Packing: ",
    PackingDesc: `Kashkids multi-vitamin Liquied bottle contains 120 ml`,
  },
  {
    id: 4,
    image: "images/4.webp",
    title: "Nervoacid",
    body: `Each capsule contains:
                Thioctic Acid 300 mg
                Vitamin B1 (Thiamine HCl) 150 mg
                Vitamin B6 (Pyridoxine HCl) 30.37 mg
                Vitamin B12 (Cyanocobalamin) 1 mg
                Folic Acid 0.5 mg
                `,
    indicationsTitle: "Indications:",
    indicationDesc: `
                Diabetic polyneuropathy 
                - Neuritis
                - Polyneuritis
                - Neurodegenerative diseases
                - Optic neuritis
                - Neuralgia of the spinal nerves
                - Prevention and treatment of deficiency of Vitamin B1, B6, B12 & Folic Acid `,
    doseTitle: "Dose:",
    dose: `One to two capsules of Nervoacid a day, or as prescribed by the physician`,
    PackingTitle: "Packing: ",
    PackingDesc: `Box contains 3 strips,each strip contains 10 capsules of Nervoacid`,
  },
  {
    id: 5,
    image: "images/5.webp",
    title: "Morevit pro",
    body: `Advanced multi-vitamin and mineral formula with 24 ingredients. 
                High dose vitamin B complex and vitamins A, C, D, E, plus essential minerals including magnesium, 
                selenium and zinc, copper, iodine, iron, molybdenum, calcium, manganese, 
                plus essential nutrient as choline, plus bioflavonid as Rutin & Hesperidin.
                More-vit pro indications:
                
                `,
    indicationsTitle: "Indications:",
    indicationDesc: `
                Prophylaxis against shortage of vitamins and minerals due to malnutrition 
                or certain diseases or during pregnancy, lactation, and postmenopausal.
                - Powerful antioxidant
                - Boosts immune system
                - Protection for bones & teeth. 
                - Helps prevention and management of osteoporosis. 
                - Improving general health in athletics 
                - Improving circulation. 
                - Adjuvants therapy in treatment of sinusitis & allergy. 
                - Improving overall health including bruises, spider veins and varicose veins & improving the brain function 
                Adjuvant therapy in treatment of hemorrhoids which are caused by swollen veins 
                Strong anti-inflammatory. 
                - Regulate mood and reduce depression 
                - Decrease risk of autoimmune diseases as rheumatoid arthritis, type 1 diabetes, and inflammatory bowel disease 
                - Helps weight management.`,
    doseTitle: "Dose:",
    dose: `One capsule 2 times a day with meals 
                `,
    PackingTitle: "Packing: ",
    PackingDesc: `Jar contains 30 hard Gelatin capsules`,
  },
  {
    id: 6,
    image: "images/6.webp",
    title: "Alpha Trypsopen",
    body: `Each tablet contains: Trypsin 40 mg Chymotrypsin 40 mg Papain 115 mg                
                `,
    indicationsTitle: "Indications:",
    indicationDesc: `
                For resorption of post-traumatic and post-operative oedema and exudate. 
                Adjunctive therapy in different localized inflammatory conditions.`,
    doseTitle: "Dose:",
    dose: `One to two tablets  of Alpha Trypsopen 3 times a day 1/2 to 1 hour befor meals ,
      or as prescribed by the physician`,
    PackingTitle: "Packing: ",
    PackingDesc: `Box contains 3 strips each strip contains 10 tablets of Alpha Trypsopen`,
  },
  {
    id: 7,
    image: "images/7.webp",
    title: "Puresmine",
    body: `Each tablet contains:
                Diosmin 300 mg (micronized)
                Hesperidin 100 mg
                Troxerutin 300 mg
                These bioflavonoids act as venotonics, increasing venous tone. They are used to treat venous circulation disorders, 
                such as:
                Chronic venous insufficiency (CVI)
                Varicose veins
                Spider veins
                Symptoms due to acute hemorrhoidal attacks
                Venous stasis ulcers
                `,
    indicationsTitle: "Indications:",
    indicationDesc: `
                CVI(chronic venous insufficiency).
                Acute or chronic hemorrhoids.
                Appearance of varicose veins and spider veins.
                Leg ulcers from poor circulation (venous  stasis ulcers). 
                `,
    doseTitle: "Dose:",
    dose: `One tablet of Puresmine twice daily,preferably with meals,
                or as prescribed by the physician.`,
    PackingTitle: "Packing: ",
    PackingDesc: `Box contains 3 strips,each strip contains 10 tablets of Puresmine.`,
  },
  {
    id: 8,
    image: "images/8.webp",
    title: "Bronchrooz",
    body: `120 ml Syrup Each 5 ml of Bronchrooz syrup contains 43 mg extract from Hedera helix (ivy leaf) extract. 
                `,
    indicationsTitle: "Indications:",
    indicationDesc: `Ivy leaf extract has mucolytic, spasmolytic, bronchodilatory, anti-inflammatory, and antibacterial effects,
                to reduce the frequency and intensity of cough .
                Respiratory tract infections associated symptoms.
                Cough-related sleep disturbance.
                Smokers cough.
                Asthmatic bronchitis.
                Exacerbations of chronic obstructive pulmonary disease.`,
    doseTitle: "Dose:",
    dose: `Adult: 2 tsp(10 ml).
                Childern 6 years of age and older:1.5 tsp(7.5 ml).
                Childern 2 to 5 years of age:1 tsp(5ml).
                2-6 times a day,as prescribed by doctor.`,
    PackingTitle: "Packing: ",
    PackingDesc: `Box Contains plastic bottle,which contains 120 ml of Bronchrooz Syrup.`,
  },
  {
    id: 9,
    image: "images/9.webp",
    title: "Cosystien",
    body: `Each tablet contains N-Acetylcysteine 300 mg
                N-Acetylcysteine possesses secretolytic, anti-inflammatory, and antioxidant effects for:
                Productive cough associated with respiratory infection,
                Bronchiectasis,
                Smoker's cough,
                Inflammatory diseases of rhino-pharyngeal tract &
                Adjuvant therapy for male infertility"
                `,
    indicationsTitle: "Indications:",
    indicationDesc: `
                productive cough.
                Acute and chronic diseases of respiratory tract associated with
                mucus including acute and chronic bronchitis.
                inflammatory diseases of Rhinopharyngeal tract (e.g.laryngitis,pharyngitis,sinusitis and rhinitis)
                associated with viscid mucus.
                Exacerbations of chronic obstructive pulmonary disease(COPD).
                Smokers cough.
                Adjuvant therapy for COVID-19 disease.
                Adjuvant therapy for Male infertility.`,
    doseTitle: "Dose:",
    dose: `One tablet of Marocystien 300 mg 1-2 times aday.`,
    PackingTitle: "Packing: ",
    PackingDesc: `Box Contain plastic jar , contains 30 Tablets.`,
  },
  {
    id: 10,
    image: "images/10.webp",
    title: "Meraseas",
    body: `Each tablet contains:
                EPA 215.34 mg
                DHA 140.16 mg
                Excellent source of Omega-3 fatty acids (North Atlantic Salmon Fish oil extract) for:
                Hypertriglyceridemia
                Adjunctive therapy in mixed type dyslipidemia
                Multiple risk factors associated with dyslipidemia
                Cardioprotective against CHD
                `,
    indicationsTitle: "Indications:",
    indicationDesc: `"Pregnant women likely have an increased need for essential omega-3 fatty acids compared to non-pregnant women. 
                Docosahexaenoic acid (DHA) is a major structural fat in the human brain and eyes, 
                representing about 97% of all omega-3 fats in the brain and 93% of all omega-3 fats in the retina. 
                DHA is particularly important for fetal development of the brain and retina during the third trimester 
                and up to 18 months of life. data derived from Observational studies have found that omega-3 fatty acid consumption 
                during pregnancy is associated with improved neurodevelopmental outcomes in newborns. Additionally, 
                omega-3 fatty acids can improve endothelial function and slightly lower blood pressure. 
                AHA Nutrition Committee current US dietary guideline recommendations 
                on daily intake of omega-3 fatty acids during pregnancy for a lower risk of pre-eclampsia."`,
    doseTitle: "Dose:",
    dose: `One to two tablets of Meraseas daily `,
    PackingTitle: "Packing: ",
    PackingDesc: `Box contains plastic jar , containing 30 tablets of Meraseas`,
  },
  {
    id: 11,
    image: "images/12.webp",
    title: "Halotripsine",
    body: `Each tablet contains: 
                Trypsin 1.58 mg Chymotrypsin 30 mg Pancreatin 50 mg Bromelain 66.5mg
                
                `,
    indicationsTitle: "Indications:",
    indicationDesc: `
                Resorption of post-traumatic & post-operative oedema & exudate. 
                Adjunctive therapy in localised inflammatory conditions 
                such as:
                phlebitis,thrombophlebitis,decubitus ulcers...ext ,
                inflammatory conditions and related pains regardless of the origin and localization especially in:
                Traumatology and Surgery:
                Preventive and curative treatment of post-traumatic and Post-operative edemas and hematomas.
                Orthopedic:
                Sciatica,osteoarthritis,sprains,hematomas,sequelae of fractures and post-operative edemas.`,
    doseTitle: "Dose:",
    dose: `
                One to two tablets a day. dose may be increased according to nature and severity of 
                the clinical condition (as prescribed by the physician). with enough amount of water.
                `,
    PackingTitle: "Packing: ",
    PackingDesc: `Box contains 3 strips,each strip contains 10 tablets of Halotripsine.`,
  },
  {
    id: 12,
    image: "images/13.webp",
    title: "Agarokash",
    body: `Agar Agar (Gelidiela Acerosa) extract, each sachet contains 1.5 gm powder of Agar, for neonatal jaundice.
                `,
    indicationsTitle: "Indications:",
    indicationDesc: `Neonatal unconjugated hyperbilirubinemia 
                prolonged physiological jaundice 
                Irritable bowel`,
    doseTitle: "Dose:",
    dose: `According to physician's prescription,
                Dissolve the contents of Agarokash sachets in 10 ml water or as directed by the prescribing doctor
                `,
    PackingTitle: "Packing: ",
    PackingDesc: `Box contains 10 sachets of Meragar.`,
  },
  {
    id: 13,
    image: "images/14.webp",
    title: "Merager",
    body: `Agar Agar (Gelidiela Acerosa) extract, 
                each sachet contains 1.5 gm powder of Agar, for neonatal jaundice.
                `,
    indicationsTitle: "Indications:",
    indicationDesc: `Agar ingestion decreased bilirubin levels in term new borns and
                increased fecel elimination of the pigment.
                Oral Agar can also be used as a single agent for the treatment of neonatal hyperbilirubinemia,
                since it is as effective as phototherapy.
                Oral Agar supplemented feeding at 600 mg/kg/day is safe for full-term neonates
                and useful in decreasing TSB and phototherapy duration. 
                The efficacy of phototherapy in decreasing TSB level in neonatal hyperbilirubinemia 
                can be augmented with oral agar usage.`,
    doseTitle: "Dose:",
    dose: `According to physician's prescription ,
                Dissolve the contents of Agarokash sachets in 10 ml water or as directed by the prescribing doctor`,
    PackingTitle: "Packing: ",
    PackingDesc: `Box contains 10 sachets of Meragar.`,
  },
  {
    id: 14,
    image: "images/15.webp",
    title: "Brand Seas",
    body: `Composition:
                Each 5 ml of Brand Seas Syrup contains: EPA 736 mg DHA 460 mg Vitamin E 6 mg Vitamin D3 500 IU                
                
                `,
    indicationsTitle: "Indications:",
    indicationDesc: `
                Supports brain growth and brain function.
                - Improves reading and maths skills.
                - Prevents depression in children.
                - Improves learning and behavior in development coordination disorder.
                - Supports healthy bones, immunity, and vision.
                - Reduces incidence of respiratory illness and diarrhea in infants.
                - Reduces insulin resistance in obese children.`,
    doseTitle: "Dose:",
    dose: `
                For children over 4 years to 12 years old, dose is 2.5-5 ml of Brand Seas Syrup a day, or as prescribed by doctor.
                - For adults, dose is 5 ml of Brand Seas Syrup a day, or as prescribed by doctor.`,
    PackingTitle: "Packing: ",
    PackingDesc: `Box contains plastic bottle with 120 ml of Brand Seas Syrup.`,
  },
  {
    id: 15,
    image: "images/16.webp",
    title: "Ivy Acetyl",
    body: `120 ml Syrup
                (Each 5 ml of IvyAcetyl Zinc syrup contains: Ivy leaf extract (Hedera helix) 150 mg, Acetyl cysteine 50 mg & Zinc 1.87 mg).
                `,
    indicationsTitle: "Indications:",
    indicationDesc: `Used as an expectorant & to reduce the frequency and intensity of cough.`,
    doseTitle: "Dose:",
    dose: `5 ml three times daily (maximum dose 20ml per day), away from meals , or as prescribed by doctor.
    it is advisable to divide the daily intake into two times.`,
    PackingTitle: "Packing: ",
    PackingDesc: ` bottel 120 ml`,
  },
  {
    id: 16,
    image: "images/17.webp",
    title: "Marocystien",
    body: `Each tablet contains N-Acetylcysteine 300 mg.
                N-Acetylcysteine possesses secretolytic, anti-inflammatory, and antioxidant effects for productive cough associated with respiratory infection, 
                bronchiectasis, smoker's cough, inflammatory diseases of rhino-pharyngeal tract, and adjuvant therapy for male infertility.
                `,
    indicationsTitle: "Indications:",
    indicationDesc: `
                productive cough.
                Acute and chronic diseases of respiratory tract associated with
                mucus including acute and chronic bronchitis.
                inflammatory diseases of Rhinopharyngeal tract (e.g.laryngitis,pharyngitis,sinusitis and rhinitis)
                associated with viscid mucus.
                Exacerbations of chronic obstructive pulmonary disease(COPD).
                Smokers cough.
                Adjuvant therapy for COVID-19 disease.
                Adjuvant therapy for Male infertility.
                `,
    doseTitle: "Dose:",
    dose: `One tablet of Marocystien 300 mg 1-2 times aday.`,
    PackingTitle: "Packing: ",
    PackingDesc: `Box Contain plastic jar , contains 30 Tablets.`,
  },
  {
    id: 17,
    image: "images/18.webp",
    title: "Samokids",
    body: `Multivitamin Syrup 120 ml
                includes a range of 15 vitamins and minerals to help maintain all round health. 
                The syrup contains Vitamin B Complex plus vitamins (A, E, C,, D3) plus minerals including (iron, iodine, zinc, copper,folic acid). 
                Kashkids : 
                Multivitamin Liquid is the first ever comprehensive multivitamin liquid just for kids , which provides an easy way to help safeguard the nutritional intake of childern aged 4-12 years.                

                `,
    indicationsTitle: "Indications:",
    indicationDesc: `
                For fussy eaters kids
                - Vegetarian kids
                - Support for normal cognitive development of children
                - Support for normal immune system function for children`,
    doseTitle: "Dose:",
    dose: `
                For children aged 4-10 years old:
                1 teaspoonful (5 ml) daily
                - For children aged 11-12 years old: 
                2 teaspoonful (10ml) daily`,
    PackingTitle: "Packing: ",
    PackingDesc: `bottel 120 ml`,
  },
  
  {
    id: 19,
    image: "images/20.webp",
    title: "LECI",
    body: `Daily multivitamin formulated for children & adult to support Energy, immunity, metabolism, growth and whole body health.
                LECI POWDER: Unique integrated formula for vitality. Tailored to unique requirement of active children and for adult.
                LECI POWDER: mixed of 9 gm. protein and 5 essential micronutrients, including Vitamin A,E,C and zinc & selenium to nourish the body.
                LECI POWDER: Contains 100 mg. lactoferrin for support immune system and improve iron uptake and store.
                LECI POWDER: Boosts immune health.
                LECI POWDER: Is extremely important to help the body defend against environmental stressors.
                LECI POWDER: Easy dose.
                LECI POWDER: Promotes normal growth and good health.
                LECI POWDER: Cell protection crafted with antioxidants to support vitality.
                `,
    indicationsTitle: "Indications:",
    indicationDesc: `
                Low infant growth rate (retarded growth).
                Nutritional deficiencies.
                Malnutrition
                Vegetarian
                Recurrent GIT infection.
                BOOST immune system .
                immunocompromised patients.
                POST surgery to enhance recovery by icreasing tissue healing .
                Support normal nerves and muscle functions in elderly patient.
                Control body Weight.

                `,
    doseTitle: "Dose:",
    dose: `one sachet per day`,
    PackingTitle: "Packing: ",
    PackingDesc: `box contains 10 sachets each sachet 10 gm.`,
  },
  {
    id: 21,
    image: "images/21.webp",
    title: "Brand cal",
    body: `Brand Cal Syrup is a balanced and carefully researched bone building formula. 
                It is suitable for the development, growth, 
                and building of healthy bones and teeth in healthy infants and children.
                Additionally, 
                it contributes to the maintenance of normal bones in adults.
                The ingredients of Brand Cal Syrup include:
                Calcium carbonate (150 mg calcium)
                Magnesium hydroxide (75 mg magnesium)
                Vitamin D3 (10 mcg cholecalciferol)
                Zinc gluconate (3 mg zinc)
                `,
    indicationsTitle: "Indications:",
    indicationDesc: `Brand Cal syrup 120 ml Balanced carefully researched bone-building formula .
                For:development,growth and building healthy bone and teeth in healthy infants and children.
                Also contribute to the maintenance of normal bones in adults`,
    doseTitle: "Dose:",
    dose: `childern(3-12 years):2 teaspoonful daily`,
    PackingTitle: "Packing: ",
    PackingDesc: `120 ml syrup in a plastic bottle..`,
  },
  {
    id: 22,
    image: "images/22.webp",
    title: "Viprot",
    body: `Nutrition Protein Mix Vitality is a daily multivitamin designed for children and adults to support energy,
                immunity, metabolism, growth, and whole-body health. The mixture contains 15 grams of protein and 15 essential micronutrients, 
                including Vitamins C, E, Zinc, Selenium, and Manganese to nourish the body.
                `,
    indicationsTitle: "Indications:",
    indicationDesc: `Low infant growth rate
                - Nutritional deficiencies
                - Malnutrition
                - Vegetarian
                - Boosts immune system
                - Increases tissue healing
                - Supports normal nerves and muscle functions in elderly patients`,
    doseTitle: "Dose:",
    dose: `Children aged 2-4 years: one scoop (10gm) once daily for one month
                - School-age children (5-12 years): two scoops twice daily
                - Adults over the age of 12 years: three scoops three times per day`,
    PackingTitle: "Packing: ",
    PackingDesc: ` 350 gm tightly closed vacuumed sachet with chocolate taste.`,
  },
  {
    id: 23,
    image: "images/23.webp",
    title: "Pirovit",
    body: `Pirovit is an iron supplement that provides the body with the recommended daily allowance (RDA) of iron in a lactoferrin chelating form, 
                with a very high compliance 1-2 sachet dosage form either for ID or IDA. 
                is an integrated formula for prophylaxis and treatment of infections.
                food supplement based on iron, copper, Vitamin B12, folic acid, and lactoferrin. 
                It contributes to the normal formation of red blood cells and hemoglobin and helps reduce the sense of fatigue and tiredness.`,
    indicationsTitle: "Indications:",
    indicationDesc: `
                Treatment of ID and IDA in pregnant , lactating women and in children.
                Prophylaxis and helps in tratment of infections.
                Boosts immunity.
                Helps in treatment of hepatitis C.
                Suitable for all age groups (School age children vAdults and Elderly ).
                Suitable for post-surgery , diabetic patients , pregnant women, other chronic diseases & athletes.
                `,
    doseTitle: "Dose:",
    dose: `Dissolve one or two Pirovit sachets in a cup of water or juice.
                - 1-2 Pirovit sachets per day, as prescribed by a doctor for prophylactic or treatment purposes.`,
    PackingTitle: "Packing: ",
    PackingDesc: `Box contains 10 sachets, each containing 3 grams of Pirovit.`,
  },
  {
    id: 24,
    image: "images/24.webp",
    title: "Ferokash",
    body: `Iron supplies 81% of the daily value of this mineral,
                in a pleasant-tasting,easy-to-take liquid formula that's also an excellent source of vitamin c.
                ferokash has chelated bioavailable iron.
                Iron integrated formula for prophylaxis and treatment IDA in children.
                Ferrous bisglycinate is iron amino acid chelated for improving iron absorption,storage and bioavailability.
                Vitamin C:facilitie the iron absorption.
                Vitamin B3:improves blood flow,enhance iron utilization.
                Vitamin B6:is a coenzyme for the synthesis of hemoglobin.
                Vitamin B12:improves Erythroblasts proliferation.
                Vitamin B1:necessary to maintain proper blood levels.
                `,
    indicationsTitle: "Indications:",
    indicationDesc: ``,
    doseTitle: "Dose:",
    dose: `20 ml daily`,
    PackingTitle: "Packing: ",
    PackingDesc: `box contains plastic bottle,which contains 120 ml.`,
  },
];

// !-----------------------------------------------------------------------------------
// TODO: Display Product in Html--------------

let cartona = "";
for (let i = 0; i <= 11; i++) {
  cartona += `
        <div  class="col-md-3 gy-4">
            <div class="product_DES card shadow-sm " >
                <img onclick="displayProductDesc(${i})" src="${product[i].image}" alt="Description of the image">
            </div>
        </div>
        `;
}

document.getElementById("rowData").innerHTML = cartona;

btn1.addEventListener("click", function () {
    let cartona = "";
    for (let i = 0; i <= 11; i++) {
        cartona += `
            <div  class="col-md-3 gy-4">
                <div class="product_DES card shadow-sm " >
                    <img onclick="displayProductDesc(${i})" src="${product[i].image}" alt="Description of the image">
                </div>
            </div>
            `;
    }

    document.getElementById("rowData").innerHTML = cartona;
});
btn2.addEventListener("click", function () {
    let cartona = "";
    for (let i = 12; i < 22; i++) {
        cartona += `
            <div  class="col-md-3 gy-4">
                <div class="product_DES card shadow-sm " >
                    <img onclick="displayProductDesc(${i})" src="${product[i].image}" alt="Description of the image">
                </div>
            </div>
            `;
    }

    document.getElementById("rowData").innerHTML = cartona;
});

// !--------displayProductDesc-----

function displayProductDesc(i) {
    let productDesc = product[i];
    localStorage.setItem("product", JSON.stringify(productDesc));
    location.assign("productDesc.html");
}

learnMore.addEventListener("click", function () {
    let productDesc = {
    id: 20,
    image: "images/11.webp",
    title: "Kiromix pro",
    body: `26 Active Ingredients for Excellent Fertilization
        Super Antioxidant Formula , choosen carefully to maximize the chance of fertility in both male & female.
        natural blend of unique components with high concentrations, water and fat-soluble vitamins, fully reacted amino acids chelated minerals and antioxidants which work together to improve ovulation in females, embryo quality, improve spermatogenesis in male, improve sperm quality, count motility by strengthening the antioxidant defense mechanism thus preventing oxidative stress. the Egg and sperm quality are vital components in the success rate of couple's trying to conceive.
        the formula contains L arginine 4 gm that is a precursor of NO which has important role in increasing blood flow , co q10 150 mg, Citruline , Glutamine , Taurine , D-ribose as source of energy & Repair the damaged DNA.
        
        `,
    indicationsTitle: "Indications:",
    indicationDesc: `
        1-Male Infertility:
        Erectile dysfunction
        Oligozoospermia
        Teratozoospermia
        Asthenozoospermia.
        2-female Infertility:
        Improves ovulation
        PCO
        Endometriosis.
        3-Pregnant Women:
        Pre-eclampsia
        IUGR
        Oligohydramnios
        Pre term birth
        Still birth.
        Recurrent abortion.`,
    doseTitle: "Dose:",
    dose: `One sachet per day`,
    PackingTitle: "Packing: ",
    PackingDesc: `Carton box contains (10 sachets, 120 gm.)`,
  };
  localStorage.setItem("product", JSON.stringify(productDesc));
  location.assign("productDesc.html");
});
// !----- Loading Page -------
    $(document).ready(function () {
    $("#loading .ring").fadeOut(1800, function () {
        $("#loading").fadeOut(1800, function () {
        $("#loading").remove();
        $("#homePage").css("overflow", "auto");
        });
    });
    });
    // !----- Loading Page -------
    // TODO-------------------------------------------------------------
    // !products section----
    function scrollToTop() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    }
var button = document.querySelector(".top-button");
button.addEventListener("click", scrollToTop);
let contactSection = $("#contactUs").offset().top;
function toggleButton() {
    let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
    let threshold = 100;
    if (scrollPos > threshold) {
        button.style.display = "block";
    }else {
        button.style.display = "none";
    }
    if (scrollPos > contactSection-600) {
        button.style.display = "none";
    }
}

window.addEventListener("scroll", toggleButton);

// !---------Drop Down ContactUs
$(".contactInfo").slideUp();

$("#contactUs").on("click", function (event) {
  event.preventDefault();
$(".contactInfo").toggleClass("d-none").slideDown();
});
//

// !Change navbarbg
let aboutSection = $("#about").offset().top;
$(window).scroll(function () {
  let windowScroll = $(window).scrollTop();
  if (windowScroll > aboutSection) {
    $(".navbar").css("backgroundColor", "rgba(200,200,200,0.9)");
  } else {
    $(".navbar").css("backgroundColor", "white");
  }
});
