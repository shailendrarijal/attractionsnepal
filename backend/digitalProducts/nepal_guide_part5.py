#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Part 5: Arts & Crafts, Practical Info, 100 Phrases, and main build"""
from nepal_guide_part1 import *

def build_arts():
    flows = chapter_header(
        "Chapter 9: Arts & Crafts",
        "Thangka to Pashmina — two millennia of Himalayan artistic tradition"
    )

    flows += section_head("Traditional Arts of Nepal")
    arts = [
        ("Thangka Painting (थाङ्का)", "Thangka (also Thangka) are Buddhist scroll paintings on cotton or silk canvas, depicting deities, mandalas, life stories of the Buddha, and cosmic diagrams. A single Thangka may take three months to a year to complete. The finest are painted with mineral pigments ground from lapis lazuli, cinnabar, malachite, and gold. True Thangka painters in the Śākyamuṇī tradition at Boudha and Patan undergo years of training. A genuine Thangka is both a sacred object and one of the most technically accomplished art forms in the world. Prices range from NPR 5,000 for simple teaching Thangkas to NPR 500,000+ for museum-quality work."),
        ("Maṇḍala Painting (मण्डल)", "Sacred geometric diagrams representing the universe and the mind of the Buddha. Used in meditation, initiation rituals, and as objects of contemplation. Painted on paper or cloth with mineral pigments; the finest use gold and lapis outlines. Sand maṇḍalas — made from coloured sand grain by grain over days and then ritually destroyed — are created during major Buddhist ceremonies at monasteries including Boudhanātha and Kopān."),
        ("Paṭa Painting (Newar)", "Traditional Newar paintings on cloth depicting mythological narratives — the Aṣṭa Mātr̥kā (eight mother goddesses), the Kumārī, Śiva-Pārvatī, and the stories of Viṣṇu's avatāras. Painted in flat, jewel-like colours on a red or black background. Paṭa painters (Citra Kāra artisans) in Patan maintain the oldest continuous painting tradition in Nepal."),
        ("Bronze & Copper Casting", "Nepal is the world centre for Buddhist and Hindu ritual metal objects. The <i>lost-wax (cire-perdue)</i> casting method — in which a wax model is encased in clay, the wax burnt out, and molten metal poured in — has been practised by the Tāmrakāra (copper-smith) artisans of Patan since at least the 9th century. Nepalī bronze Buddhas, Bodhisattvas, and deity statues are collected by museums worldwide. The Patan Museum houses the finest collection."),
        ("Woodcarving (Kāṣṭhakalā)", "The elaborately carved wooden windows, struts, doors, and brackets of the valley's temples represent one of the great achievements of world art. The celebrated <b>Peacock Window</b> of Bhaktapur's Taumadhi Square — a 15th-century masterwork — depicts a peacock in an interlocking circular design of extraordinary finesse. Temple eave struts often depict erotic scenes — not pornographic but cosmically symbolic, believed to ward off the lightning goddess (associated with purity) who will not strike a temple displaying such imagery."),
        ("Stone Carving (Śilpa Kalā)", "Nepal's oldest art form — stone sculptures from the Licchavī period (5th–9th century CE) remain some of the finest religious sculpture anywhere. Seated Viṣṇu images, Narayan reliefs, and dancing Śiva forms at Chaṅgu Narayan and in Patan's courtyards date from this era. Stone carving continues in Bhaktapur, where artisans chisel deity images sold as both sacred objects and décor."),
        ("Pottery (Kumhāle Kalā)", "Bhaktapur and Thimi are the pottery capitals of Nepal. Traditional wheel-thrown terracotta — water pots (ghaṭa), diyas (oil lamps), roof tiles, flower pots, and ritual vessels — is produced in open-air workshops that have operated continuously for centuries. Bhaktapur's Potters' Square (Kumhāle Cok) is a working pottery market where artisans fire kilns beside medieval temples. The unglazed terracotta of Nepal is distinctively warm and earthy."),
        ("Dhākā Weaving", "Dhākā is a hand-woven geometric-patterned cotton or silk fabric from Palpa (in western Nepal) and Tehrathum (eastern hills). The technique requires extraordinary skill — patterns are created by the weaver's hands, not a loom mechanism. Dhākā is used for the Nepalī <i>ṭopī</i> (traditional cap), blouses, shawls, and scarves. Machine-made 'dhākā' is now common; hand-loomed Palpa dhākā commands a premium."),
        ("Pashmina (Cashmere)", "Pashmina is the ultra-fine under-fleece of the Chyaṅgrā mountain goat (<i>Capra hircus laniger</i>), harvested from animals grazing above 4,000 m in the Himalayan and Tibetan plateau. Genuine Nepalī Pashmina has fibres 12–15 microns in diameter — thinner than a human hair — producing a warmth-to-weight ratio unmatched by any other natural fibre. A single hand-woven Pashmina shawl may require 4–6 hours of weaving. Beware: most 'pashmina' in tourist shops is polyester. Test: genuine Pashmina burns like hair (protein fibre) not plastic."),
        ("Singing Bowls (Tilā Bājā)", "Metal bowls that produce sustained resonant tones when struck or rubbed with a wooden or leather mallet. Traditionally made from an alloy of five, seven, or nine metals (including copper, tin, zinc, and sometimes silver or gold). Used in Buddhist rituals, meditation, and sound healing. The finest antique bowls from Nepal and Tibet are highly sought by collectors."),
        ("Lokta Paper (Nepalī Kāgaja)", "Paper made from the bark of the Lokta bush (<i>Daphne bholua</i>), a shrub native to Nepal's forest zone (1,500–4,000 m). Lokta paper is remarkably strong (it does not tear), insect-resistant, and has been used for official documents and sacred manuscripts for centuries. Sheets are dried in the sun on wooden frames in a process unchanged since the 12th century. Modern artisans dye and print Lokta to make notebooks, lampshades, gift wrap, and artisan stationery."),
        ("Traditional Jewellery", "Nepalī jewellery traditions vary enormously by community. Newar goldsmiths in Patan create intricate repoussé gold and silver work worn at festivals. Hill women wear heavy silver torque necklaces (<i>ṭika māl</i>), gold nose rings (<i>bulākī</i>), and coin belts. Mountain communities (Sherpa, Tibetan heritage) wear silver and turquoise gonkhar necklaces, coral earrings, and the distinctive <i>gau</i> — a silver reliquary box worn at the throat containing a folded sacred text."),
    ]
    for name, desc in arts:
        flows += sub_head(name)
        flows.append(body(desc))
        flows.append(Spacer(1, 3*mm))

    flows += top10_table("Top 10 Art Galleries & Shopping", [
        ("Patan Museum, Lalitpur",          "The finest museum in Nepal. The collection of bronze deities, stone sculpture, and religious objects spans 2,000 years. The museum building itself — a restored 17th-century Malla palace — is a masterwork."),
        ("Nepal Art Council Gallery, Kathmandu","Premier national gallery at Babar Mahal. Solo and group shows by leading Nepalī contemporary and traditional artists."),
        ("Siddhartha Art Gallery, Kathmandu","Baber Mahal Revisited complex. Dedicated to contemporary Nepalī art; the most important gallery for modern Nepalī painting and sculpture."),
        ("Thangka Studios, Boudha",          "Dozens of Thangka studios surround Boudhanātha Stūpa. Rinchen Art, Tashi Dorje, and others offer gallery-quality work. Artists welcome visitors to watch the painting process."),
        ("Patan Silvercraft & Dhokra, Patan","Traditional lost-wax bronze casting studios around Maṅgal Bāzār in Patan. Watch artisans at work; buy directly from the makers."),
        ("Potters' Square (Kumhāle Cok), Bhaktapur","Not a gallery but a working pottery market operating in an open courtyard surrounded by 15th-century temples. The most authentic craft experience in the valley."),
        ("Lokta Paper Studios, Kathmandu", "The Janakpur area of Kathmandu and Bhaktapur have traditional Lokta paper workshops. Baber Mahal and Durbar Marg shops sell fine Lokta stationery."),
        ("Dilli Bāzār & Asan, Kathmandu",  "The old bazaars of central Kathmandu — best for genuine Dhākā fabric, Newar jewellery, and everyday religious objects at local prices."),
        ("Thamel Galleries, Kathmandu",    "The tourist district has many galleries. Quality varies enormously — ask about provenance and take time to compare. Genuine antique export requires a permit."),
        ("Bhaktapur Craft Shops",           "The entrance street of Bhaktapur has the highest concentration of genuine woodcarving, pottery, and Dhākā goods anywhere outside a museum. Artisan workshops welcome visitors."),
    ])

    flows += top10_table("Top 10 Souvenirs to Take Home", [
        ("Pashmina shawl or scarf",     "Genuine hand-woven Pashmina. Test: burn a thread — pure Pashmina smells of hair, not plastic. Expect to pay NPR 3,000–15,000 for a genuine piece."),
        ("Thangka scroll painting",     "A teaching Thangka (simpler, NPR 3,000–8,000) makes a meaningful gift. For fine art, visit the studios at Boudha and negotiate with the artist directly."),
        ("Singing bowl",               "A good mid-sized hand-hammered bowl: NPR 1,500–8,000. Machine-made bowls are cheaper; the sound quality tells the difference. Strike it in the shop before buying."),
        ("Khukurī knife",              "The iconic curved knife of the Gurkha soldiers. Official military-issue khukurīs from Bhīmphedi craftsmen. Declare when flying internationally."),
        ("Dhākā ṭopī (cap) or fabric", "The iconic Nepalī man's cap and hand-woven fabric. Genuine Palpa dhākā: look for the handmade label and slightly irregular pattern."),
        ("Lokta paper products",       "Notebooks, journals, greeting cards, and lampshades in handmade Nepalī bark paper. Lightweight, beautiful, and genuinely unique."),
        ("Hand-carved wooden mask",    "Deity masks and Lākhe demon masks from Bhaktapur woodcarving workshops. Functional ritual objects that make spectacular wall art."),
        ("Bronze or copper deity statue","A Śākyamuṇī Buddha or Gaṇeśa from a Patan foundry. Genuine lost-wax cast bronzes feel heavy and have slight surface texture; mould-cast fakes are lighter and smoother."),
        ("Tibetan jewellery",          "Coral, turquoise, and silver pieces from the mountain communities. The deep-red coral and sky-blue turquoise of genuine Tibetan work is distinctive."),
        ("Himalayan herbs and spices", "Ṭimur (Sichuan pepper), Jimbu (Himalayan herb), organic Nepalī teas (Ilam orthodox tea from eastern Nepal rivals Darjeeling), pure honey from Gurung cliff-beekeepers."),
    ])
    return flows

def build_practical():
    flows = chapter_header(
        "Chapter 10: Practical Information",
        "Visa, health, transport, money, communication — everything you need"
    )
    flows += section_head("Visa")
    flows.append(body(
        "Most nationalities can obtain a <b>Tourist Visa on Arrival</b> at Tribhuvan "
        "International Airport (Kathmandu) and at the Birgunj, Sunauli, Kakarbhiṭṭā, "
        "Rasuwāgaḍhī, and Kodārī land border crossings. Fees: 15 days USD 30, 30 days "
        "USD 50, 90 days USD 125. E-visa available online before travel. Citizens of India "
        "do not require a visa."
    ))
    flows += section_head("Money")
    flows.append(body(
        "Currency: <b>Nepalese Rupee (NPR)</b>. ATMs are widely available in Kathmandu, "
        "Pokhara, Bhaktapur, and Lalitpur. Outside major towns, carry cash. Indian Rupee "
        "notes (50 and below) are accepted in some border areas. Credit cards accepted at "
        "larger hotels and restaurants in cities — not in trekking lodges. Bargaining is "
        "expected at open markets but not in restaurants or established shops."
    ))
    flows += section_head("Health")
    recommended = [
        "Hepatitis A and B", "Typhoid", "Tetanus-diphtheria",
        "Meningococcal (if trekking)", "Japanese Encephalitis (Terai)",
        "Rabies pre-exposure (extended rural stays)",
    ]
    flows.append(body("<b>Recommended vaccinations:</b>"))
    flows += bullet_table(recommended, cols=2)
    flows.append(body(
        "Drink bottled or purified water only. "
        "Altitude sickness prevention: see Chapter 7. "
        "Travel insurance covering helicopter evacuation is strongly recommended for any trek above 3,000 m. "
        "CIWEC Clinic in Kathmandu is the recommended medical facility for foreigners."
    ))
    flows += section_head("Transport Within Nepal")
    transport = [
        "<b>Domestic flights</b>: Yeti Airlines, Buddha Air, and Saurya Airlines connect Kathmandu to Pokhara, Bharatpur (Chitwan), Bhairahawa (Lumbini), Bhadrapur (far east), Nepalgunj, and numerous mountain airstrips.",
        "<b>Tourist buses</b>: AC tourist buses Kathmandu–Pokhara (6–7 hrs, ~NPR 1,000–1,500). Night buses to Chitwan, Lumbini, Janakpur.",
        "<b>Local buses</b>: extensive network but crowded and slow. Cheap (NPR 30–200 for most routes).",
        "<b>Taxis</b>: metered in Kathmandu (insist on meter or agree fare before). Ride apps (Pathao, InDrive) work in the valley.",
        "<b>Hiring a car/jeep</b>: best for Mustang, Manang approach roads, and remote areas. Local agencies in Kathmandu and Pokhara.",
    ]
    flows += bullet_table(transport, cols=1)
    flows += section_head("Communication")
    comms = [
        "SIM cards (Ncell or Nepal Telecom): buy at the airport on arrival with your passport. Data packages are affordable (~NPR 500 for 10GB).",
        "WiFi is available in all city hotels, most trekking lodges, and restaurants in tourist areas.",
        "Nepal's country calling code: +977.",
        "Emergency numbers: Police 100 | Ambulance 102 | Tourist Police 01-4247041",
    ]
    flows += bullet_table(comms, cols=1)
    return flows

def build_phrases():
    flows = chapter_header(
        "Chapter 11: 100 Essential Nepalī Phrases",
        "Greetings · Courtesy · Numbers · Directions · Food · Transport · Emergency · Trekking"
    )
    flows.append(body(
        "All Nepalī words below are given in <b>IAST transliteration</b>. Long vowels (ā, ī, ū) "
        "are held about twice as long as short vowels. The phonetic guide uses simple English "
        "approximations. Nepalī is written in Devanāgarī script — learning even five words "
        "will be warmly received."
    ))
    flows.append(Spacer(1, 3*mm))

    # 1. Greetings
    flows += sub_head("1. Greetings (Abhivādana)")
    flows += phrase_table([
        ("Hello / Goodbye (formal)",    "Namaste / Namaskāra",       "Na-mas-te / Na-mas-kaa-ra"),
        ("Hello (casual, to younger)",  "Namaskar",                   "Na-mas-kar"),
        ("Good morning",                "Śubha prabhāta",             "Shu-bha pra-bhaa-ta"),
        ("Good evening",                "Śubha sāṃjha",               "Shu-bha saan-jha"),
        ("Good night",                  "Śubha rātrī",                "Shu-bha raat-ree"),
        ("How are you?",                "Tapāīṃlāī kaiso cha?",       "Ta-paa-ee-lai kai-so cha"),
        ("I'm fine, thank you",         "Ṭhīk cha, dhanyavāda",       "Theek cha, dhan-ya-waa-da"),
        ("What is your name?",          "Tapāīko nāma ke ho?",        "Ta-paa-ee-ko naa-ma ke ho"),
        ("My name is ...",              "Mero nāma ... ho",            "Me-ro naa-ma ... ho"),
        ("Welcome! / Be comfortable",   "Svāgata cha! / Ārāma gara",  "Swaa-ga-ta cha / Aa-raa-ma ga-ra"),
    ])

    # 2. Courtesy
    flows += sub_head("2. Courtesy (Śiṣṭācāra)")
    flows += phrase_table([
        ("Thank you (formal)",          "Dhanyavāda",                 "Dhan-ya-waa-da"),
        ("Thank you (casual)",          "Shukriyā",                   "Shu-kri-yaa"),
        ("You're welcome",              "Ke kura / Parvaā chaina",    "Ke ku-ra / Par-waa chai-na"),
        ("Please",                      "Kṛpayā",                     "Kri-pa-yaa"),
        ("Excuse me / Sorry",           "Māph garnuhos",              "Maaf gar-nu-hos"),
        ("Yes",                         "Ho / Hajur (respectful)",    "Ho / Ha-jur"),
        ("No",                          "Hoina",                      "Hoi-na"),
        ("OK / Good",                   "Ṭhīk cha",                   "Theek cha"),
        ("I don't understand",          "Malaī bujhiena",             "Ma-lai bu-jhi-e-na"),
        ("Do you speak English?",       "Tapāīlaī Aṅgrejī āuncha?",   "Ta-paa-ee-lai Ang-re-ji aa-un-cha"),
    ])

    # 3. Numbers
    flows += sub_head("3. Numbers (Saṃkhyā)")
    flows += phrase_table([
        ("One",       "Ek",          "Ek"),
        ("Two",       "Dui",         "Du-i"),
        ("Three",     "Tīn",         "Teen"),
        ("Four",      "Cār",         "Chaar"),
        ("Five",      "Pāṃc",        "Paanch"),
        ("Six",       "Cha",         "Cha"),
        ("Seven",     "Sāt",         "Saat"),
        ("Eight",     "Āṭh",         "Aaṭh"),
        ("Nine",      "Nau",         "Nau"),
        ("Ten",       "Das",         "Das"),
    ])

    # 4. Time & Directions
    flows += sub_head("4. Time & Directions (Samaya ra Diśā)")
    flows += phrase_table([
        ("Where is ...?",               "... kahāṃ cha?",             "... ka-haan cha"),
        ("Left",                        "Bāyāṃ",                      "Baa-yaan"),
        ("Right",                       "Dayāṃ",                      "Da-yaan"),
        ("Straight ahead",              "Sidho jānus",                "Si-dho jaa-nus"),
        ("Near",                        "Najik",                      "Na-jik"),
        ("Far",                         "Tādha",                      "Taa-dha"),
        ("How far?",                    "Kati tādha cha?",            "Ka-ti taa-dha cha"),
        ("What time is it?",            "Kati baje?",                 "Ka-ti ba-je"),
        ("Today / Tomorrow / Yesterday","Āja / Bholi / Hijo",         "Aa-ja / Bho-li / Hi-jo"),
        ("How long to get there?",      "Pugna kati samaya lagcha?",  "Pug-na ka-ti sa-ma-ya lag-cha"),
    ])

    # 5. Shopping & Money
    flows += sub_head("5. Shopping & Money (Kinmel ra Paisa)")
    flows += phrase_table([
        ("How much does this cost?",    "Yo kati ho?",                "Yo ka-ti ho"),
        ("Too expensive",               "Mahago cha",                 "Ma-ha-go cha"),
        ("Can you give a discount?",    "Lastī dinuhos?",             "Las-tee di-nu-hos"),
        ("I'll take it",                "Linchhū",                    "Lin-chhu"),
        ("Do you have ...?",            "... cha?",                   "... cha"),
        ("I want ...",                  "Malaī ... chāhiyo",          "Ma-lai ... chaa-hi-yo"),
        ("Do you accept cards?",        "Kārḍ chalcha?",              "Kaard chal-cha"),
        ("Give me a receipt",           "Bīl dinuhos",                "Bil di-nu-hos"),
        ("What is this?",               "Yo ke ho?",                  "Yo ke ho"),
        ("Just looking, thank you",     "Herni mātra, dhanyavāda",    "Her-ni maa-tra, dhan-ya-waa-da"),
    ])

    # 6. Food & Dining
    flows += sub_head("6. Food & Dining (Khānā-Pānī)")
    flows += phrase_table([
        ("I'm hungry",                  "Malaī bhok lagyo",           "Ma-lai bhok lag-yo"),
        ("I'm thirsty",                 "Malaī tirkha lagyo",         "Ma-lai tir-kha lag-yo"),
        ("Water, please",               "Pānī dinuhos",               "Paa-ni di-nu-hos"),
        ("I am vegetarian",             "Ma śākaharī hūṃ",            "Ma shaa-ka-haa-ri hoon"),
        ("No spicy, please",            "Picchā naṭhālos, kṛpayā",    "Pi-chaa na-ṭhaa-los kri-pa-yaa"),
        ("Delicious!",                  "Mitho cha!",                 "Mi-tho cha"),
        ("Menu please",                 "Menu dinuhos",               "Menu di-nu-hos"),
        ("Tea / Coffee",                "Ciyā / Kaphī",               "Chi-yaa / Ka-phee"),
        ("Bill, please",                "Bīl dinuhos",                "Bil di-nu-hos"),
        ("More rice please",            "Bhāta aru dinuhos",          "Bhaa-ta a-ru di-nu-hos"),
    ])

    # 7. Transport
    flows += sub_head("7. Transport (Yātāyāta)")
    flows += phrase_table([
        ("Where is the bus?",           "Bas kahāṃ cha?",             "Bas ka-haan cha"),
        ("I want to go to ...",         "Ma ... jāna cāhanchhū",      "Ma ... jaa-na chaa-han-chhu"),
        ("Stop here, please",           "Yahāṃ roknus",               "Ya-haan rok-nus"),
        ("I am lost",                   "Ma harāe",                   "Ma ha-raa-e"),
        ("Airport",                     "Vimānasthala",               "Vi-maa-na-sthal"),
        ("Hotel",                       "Hoṭel",                      "Ho-ṭel"),
        ("Taxi",                        "Ṭyākṣī",                     "Ṭyaak-shee"),
        ("How much to ...?",            "... jāna kati paisa?",       "... jaa-na ka-ti pai-sa"),
        ("Turn on the meter, please",   "Mīṭar lagānus kṛpayā",       "Mee-ṭar la-gaa-nus"),
        ("Take me to ..., please",      "Malaī ... lagnus",           "Ma-lai ... lag-nus"),
    ])

    # 8. Health & Emergency
    flows += sub_head("8. Health & Emergency (Swāsthya ra Āpata)")
    flows += phrase_table([
        ("Help!",                       "Madad!",                     "Ma-dad"),
        ("Doctor",                      "Ḍākṭar",                     "Ḍaak-ṭar"),
        ("Hospital",                    "Aspatāl",                    "As-pa-taal"),
        ("I'm sick",                    "Malaī bimārī lagyo",         "Ma-lai bi-maa-ri lag-yo"),
        ("I have altitude sickness",    "Malaī altitude bimārī cha",  "Ma-lai altitude bi-maa-ri cha"),
        ("Pain here",                   "Yahāṃ dukhcha",              "Ya-haan duk-cha"),
        ("I need medicine",             "Malaī ausadhi chāhiyo",      "Ma-lai au-sa-dhi chaa-hi-yo"),
        ("Police",                      "Prāharī",                    "Praa-ha-ri"),
        ("Thief!",                      "Cor!",                       "Chor"),
        ("Call an ambulance",           "Ambulance bolāunus",         "Ambulance bo-laa-u-nus"),
    ])

    # 9. Culture & Religion
    flows += sub_head("9. Culture & Religion (Saṃskṛti ra Dharma)")
    flows += phrase_table([
        ("Temple",                      "Mandir",                     "Man-dir"),
        ("Monastery / Stupa",           "Gompā / Stūpa",              "Gom-paa / Stoo-pa"),
        ("Sacred / Holy",               "Pavitr",                     "Pa-vi-tra"),
        ("Worship / Prayer",            "Pūjā",                       "Poo-jaa"),
        ("Festival",                    "Parva / Chāḍ",               "Par-wa / Chaad"),
        ("Offering",                    "Prasāda",                    "Pra-saad"),
        ("Blessing",                    "Aśīrvāda",                   "A-sheer-waa-da"),
        ("Is photography allowed here?","Yahāṃ photo khicna pāincha?","Ya-haan photo khich-na paain-cha"),
        ("Can I enter?",                "Ma bhitra pasna pāincha?",   "Ma bhi-tra pas-na paain-cha"),
        ("May I make an offering?",     "Ma pūjā garna sakchhu?",     "Ma poo-jaa gar-na sak-chhu"),
    ])

    # 10. Trekking & Outdoors
    flows += sub_head("10. Trekking & Outdoors (Ṭreking ra Bāhira)")
    flows += phrase_table([
        ("Mountain / Peak",             "Pahāḍ / Himal",              "Pa-haad / Hi-mal"),
        ("Trail / Path",                "Bāṭo",                       "Baa-ṭo"),
        ("How many days to ...?",       "... jāna kati din lagcha?",  "... jaa-na ka-ti din lag-cha"),
        ("I want a guide / porter",     "Malaī guide / bhaṃsiyā chāhiyo", "Ma-lai guide / bhan-si-yaa chaa-hi-yo"),
        ("Where is the next lodge?",    "Aglo lodge kahāṃ cha?",      "Ag-lo lodge ka-haan cha"),
        ("Is this trail safe?",         "Yo bāṭo surakṣita cha?",     "Yo baa-ṭo su-rak-shi-ta cha"),
        ("I have altitude headache",    "Malaī altitude-ma टाउको dukhcha", "Ma-lai altitude-ma ṭaa-u-ko duk-cha"),
        ("Beautiful view!",             "Rāmro dṛśya!",               "Raam-ro dri-shya"),
        ("How deep is the snow?",       "Him kati garho cha?",        "Him ka-ti gar-ho cha"),
        ("I need to descend now",       "Ma aba thalā jānuparchha",   "Ma a-ba tha-laa jaa-nu-par-chha"),
    ])

    flows.append(Spacer(1, 4*mm))
    flows.append(ColorRect(
        "Bonus: The most useful single phrase in all of Nepal — "
        "<b>\"Āunus, ciyā khānus\"</b> (Come, have some tea) — "
        "will be offered to you everywhere. The correct response is a smile and: "
        "<b>\"Dhanyavāda, khānchhū\"</b> (Thank you, I will have some).",
        ST["italic"], bg=colors.HexColor("#FFF8F0"), border_color=GOLD, pad_h=12, pad_v=8
    ))
    return flows

# ── Page numbering ─────────────────────────────────────────────────────────────
def on_page(canvas, doc):
    canvas.saveState()
    canvas.setFont("NotoSerif", 8)
    canvas.setFillColor(colors.HexColor("#888888"))
    W, H = A4
    # Footer
    canvas.drawString(20*mm, 12*mm, "The Complete Guide to Nepal  ·  AttractionsNepal.com")
    canvas.drawRightString(W - 20*mm, 12*mm, f"Page {doc.page}")
    canvas.line(20*mm, 15*mm, W - 20*mm, 15*mm)
    canvas.restoreState()

def on_first_page(canvas, doc):
    """Full-bleed illustrated cover — drawn entirely via canvas API."""
    from reportlab.lib.pagesizes import A4
    W, H = A4
    cv = canvas

    # 1. Full-bleed background image
    cover_img = str(IMG_DIR / "cover_rgb.jpg")
    if not Path(cover_img).exists():
        cover_img = str(IMG_DIR / "cover.jpg")
    if Path(cover_img).exists():
        cv.drawImage(cover_img, 0, 0, W, H, preserveAspectRatio=False)

    # 2. Dark gradient overlay — bottom 65% fades from transparent to near-black
    from reportlab.lib import colors as _c
    overlay_h = H * 0.65
    strips = 60
    strip_h = overlay_h / strips
    for i in range(strips):
        alpha = 0.10 + 0.68 * ((strips - i) / strips)
        cv.setFillColor(_c.Color(0.05, 0.05, 0.12, alpha=alpha))
        cv.rect(0, i * strip_h, W, strip_h + 0.5, fill=1, stroke=0)

    # Additional top-of-image darkening so header text pops
    cv.setFillColor(_c.Color(0, 0, 0, alpha=0.35))
    cv.rect(0, H - 18*mm, W, 18*mm, fill=1, stroke=0)

    # 3. Solid dark band at very bottom (0–26 mm)
    cv.setFillColor(_c.Color(0.06, 0.06, 0.13, alpha=0.94))
    cv.rect(0, 0, W, 26*mm, fill=1, stroke=0)

    # 4. RED accent stripe at very top
    cv.setFillColor(RED)
    cv.rect(0, H - 10*mm, W, 10*mm, fill=1, stroke=0)
    cv.setFont("NotoSerif", 7.5)
    cv.setFillColor(WHITE)
    cv.drawCentredString(W / 2, H - 6.4*mm, "ATTRACTIONSNEPAL.COM")

    # 5. Gold horizontal rules framing the title zone
    cv.setStrokeColor(GOLD)
    cv.setLineWidth(0.8)
    cv.line(18*mm, H * 0.38,  W - 18*mm, H * 0.38)   # below topics line
    cv.line(18*mm, H * 0.565, W - 18*mm, H * 0.565)  # above "NEPAL"

    # 6. "THE COMPLETE GUIDE TO" — gold label above title
    cv.setFont("NotoSerif-Bold", 11)
    cv.setFillColor(GOLD)
    cv.drawCentredString(W / 2, H * 0.595, "THE COMPLETE GUIDE TO")

    # 7. "NEPAL" — main title (large white)
    cv.setFont("NotoSerif-Bold", 76)
    cv.setFillColor(WHITE)
    cv.drawCentredString(W / 2, H * 0.44, "NEPAL")

    # 8. Topics line just below "NEPAL"
    cv.setFont("NotoSerif-Italic", 9)
    cv.setFillColor(_c.HexColor("#FFD9A0"))
    cv.drawCentredString(
        W / 2, H * 0.395,
        "History  ·  Culture  ·  Trekking  ·  Temples  ·  Food  ·  Festivals  ·  Phrases"
    )

    # 9. Decorative double rule above bottom band
    cv.setStrokeColor(_c.HexColor("#C0A060"))
    cv.setLineWidth(0.4)
    cv.line(18*mm, 28*mm, W - 18*mm, 28*mm)
    cv.setLineWidth(1.0)
    cv.line(18*mm, 27*mm, W - 18*mm, 27*mm)

    # 10. Metadata in dark bottom band
    cv.setFont("NotoSerif", 7.5)
    cv.setFillColor(_c.HexColor("#E8D5B0"))
    cv.drawCentredString(
        W / 2, 17.5*mm,
        "With IAST Transliteration Guide  ·  100 Essential Phrases  ·  AttractionsNepal.com"
    )
    cv.setFont("NotoSerif-Bold", 7.5)
    cv.setFillColor(_c.HexColor("#AAAAAA"))
    cv.drawCentredString(W / 2, 10*mm, "FIRST EDITION  ·  2025")

# ── Main build ─────────────────────────────────────────────────────────────────
def main():
    from nepal_guide_part2 import build_cover, build_toc, build_iast, build_intro, build_history
    from nepal_guide_part3 import build_geography, build_culture
    from nepal_guide_part4 import build_food, build_trekking, build_places

    # Pre-convert cover image to RGB (avoids RGBA alpha issues in ReportLab)
    from PIL import Image as _PIL
    _cover_src = IMG_DIR / "cover.jpg"
    _cover_dst = IMG_DIR / "cover_rgb.jpg"
    if _cover_src.exists() and not _cover_dst.exists():
        _img = _PIL.open(str(_cover_src)).convert("RGB")
        _img.save(str(_cover_dst), "JPEG", quality=92)
        print("  Converted cover.jpg → cover_rgb.jpg")

    doc = SimpleDocTemplate(
        str(OUT_PATH),
        pagesize=A4,
        leftMargin=20*mm, rightMargin=20*mm,
        topMargin=18*mm,  bottomMargin=22*mm,
        title="The Complete Guide to Nepal",
        author="AttractionsNepal.com",
    )

    story = []
    story += build_cover()
    story += build_toc()
    story += build_iast()
    story += build_intro()
    story += build_history()
    story += build_geography()
    story += build_culture()
    story += build_food()
    story += build_trekking()
    story += build_places()
    story += build_arts()
    story += build_practical()
    story += build_phrases()

    doc.build(story, onFirstPage=on_first_page, onLaterPages=on_page)
    print(f"\n✓ PDF saved → {OUT_PATH}")
    import os
    size = os.path.getsize(OUT_PATH)
    print(f"  File size: {size//1024} KB")

if __name__ == "__main__":
    main()
