#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Part 4: Food, Trekking, Places"""
from nepal_guide_part1 import *

def build_food():
    flows = chapter_header(
        "Chapter 6: Food & Cuisine",
        "Dāl Bhāṭa to Chatāmārī — 20+ distinct culinary traditions"
    )
    flows += img("food", caption="A traditional Nepālī Dāl Bhāṭa set — the national meal eaten twice daily across the country")

    flows += section_head("The Soul of Nepālī Food: Dāl Bhāṭa")
    flows.append(body(
        "<b>Dāl Bhāṭa Tarkārī</b> — lentil soup, steamed rice, and vegetable curry — is the "
        "national meal of Nepāl, eaten by most of the population twice a day, every day. "
        "Far from monotonous, it is endlessly variable: the dāl changes by season and "
        "community (black lentils, yellow split peas, green lentils, whole masūr); the "
        "tarkārī (side vegetables) shift with what is growing in the garden; the rice "
        "varies from the prized <i>Jethobudho</i> of Mustāṅ to the aromatic hill varieties "
        "of the eastern hills. A complete set — called a <i>thālī</i> — includes dāl, bhāṭa, "
        "two or three tarkārī, acar (pickle), and papad, with unlimited refills."
    ))
    flows.append(Spacer(1, 2*mm))
    flows.append(body(
        "The Nepālī saying: <i>Dāl Bhāṭa power, 24 hour</i> — used half-jokingly and half-seriously "
        "by trekking guides, porters, and farmers — reflects genuine belief that this combination "
        "of protein, carbohydrate, and micronutrients provides lasting energy."
    ))
    flows.append(Spacer(1, 3*mm))

    flows += section_head("Nepāl's 20+ Culinary Traditions")
    foods = [
        ("Newār Cuisine","Kāṭhmāṇḍu Valley",
         "<b>Chatāmārī</b> (rice-flour crêpe with egg or minced meat topping — 'Newār pizza'), <b>Kvāṭī</b> (nine-bean sprout soup for Janaī Pūrṇimā), <b>Sāmay Bājī</b> (beaten rice, black lentil fritters, potato, beans, egg, and meat — a ceremonial platter), <b>Wo/Bara</b> (lentil pancakes), <b>Choila</b> (spiced, char-grilled buffalo meat), <b>Aīlā</b> (distilled grain spirit, stronger than any commercial option), <b>Thoṅ</b> (fermented rice beer). Newār food is among the most complex and ancient in Nepal — developed over two millennia of urban culture."),
        ("Maithilī / Madhesī Cuisine","Madhesh (Terai) — Janakpur region",
         "Influenced by the cooking traditions of the Gangetic plain. <b>Dhido ko ḍhikrī</b>, <b>Sattu</b> (roasted flour), <b>Ṭhekuā</b> (fried wheat cakes offered at Chhaṭha Pūjā), <b>Machar ko jhol</b> (fish curry — freshwater fish from the Terai rivers), and a wide range of mustard-oil-based curries with the five-spice mix <i>pañcaphoran</i>."),
        ("Thāru Cuisine","Western Terai",
         "<b>Ḍhiḍo</b> (stiff millet or maize porridge), <b>Til ko laddu</b> (sesame sweets), freshwater fish cooked in mustard, <b>Anārsā</b> (rice powder and jaggery sweet fried in clarified butter). The Thāru diet reflects their forest and river ecology — rich in aquatic foods and forest vegetables."),
        ("Gurung / Magar Cuisine","Gorkha, Lamjung, Syangja districts",
         "<b>Dhido</b> with nettle soup (<i>sisnuko jhol</i>), <b>gundruk</b> (fermented dried greens — a Nepāl-wide staple originally from hill communities), <b>Sel roṭī</b> (deep-fried ring-shaped rice bread made at festivals), <b>Chhang</b> (millet beer)."),
        ("Śerpā / Tibetan Cuisine","Khumbu, Upper Mustāṅ, Dolpo",
         "<b>Tsampa</b> (roasted barley flour mixed with butter tea or water — the staple of Tibetan culture), <b>Momoḥ</b> (steamed dumplings — now Nepal's most popular street food nationwide), <b>Thukpa</b> (noodle soup with vegetables or yak meat), <b>Śyākpa</b> (Tibetan stew), <b>Butter tea (Po chā)</b> — strong tea churned with yak butter and salt. A taste that surprises most visitors."),
        ("Rāī / Kirant Cuisine","Eastern hills — Solukhumbu, Khotaṅ, Bhojpur",
         "<b>Kinema</b> (fermented soybean, pungent and nutritious), <b>Ālu tāma</b> (potato and bamboo shoot curry — a Nepāl-wide favourite), <b>Chhurpī</b> (dried yak/cow cheese, the hardest cheese in the world — chewed for hours), <b>Rakṣī</b> (distilled grain spirit), <b>Toṅbā</b> (fermented millet in a bamboo vessel, drunk through a straw — warming and communal)."),
        ("Limbu Cuisine","Eastern Nepāl — Taplejung, Tehrathum",
         "<b>Fapar ko Dhido</b> (buckwheat porridge), <b>Chhurpī soup</b>, fermented vegetables, and the elaborate ceremonial food traditions surrounding the Limbu Mundum (oral tradition). Limbu communities maintain one of the most distinct culinary identities in eastern Nepāl."),
        ("Tāmāṅ Cuisine","Rasuwa, Nuwākot, Sindhupalcok",
         "<b>Tarobar</b> (millet and rice beer), <b>Śyākpa</b>, <b>Gundruk ko jhol</b>, <b>Wachipā</b> (Tāmāṅ ceremonial food), roasted maize. The Tāmāṅ diet reflects both Tibetan and hill influences."),
        ("Bhojpurī Cuisine","Western Terai — Bhairahawa, Butawal, Palpa",
         "Strongly related to eastern Uttar Pradesh: <b>Litti Chokha</b> (baked wheat balls with roasted aubergine mash), <b>Ḍhusā</b> (thick flatbread), <b>Sattu ka parāṭhā</b>, sweets like <b>Khājā</b> and <b>Tilkut</b>."),
        ("Awadhi-influenced Cuisine","Central Terai",
         "<b>Biryānī</b>, <b>Nihari</b> (slow-cooked meat stew), <b>Kebarb</b>, Muslim-influenced meat preparations using aromatic spices. The Terai's Muslim communities maintain rich Mughal-influenced food traditions."),
        ("High-Mountain / Dolpo","Upper Dolpo, Humla, Jumla",
         "One of the most austere cuisines — <b>Tsampa</b>, <b>Butter tea</b>, dried yak meat, <b>Phākku</b> (barley bread). The isolation and extreme altitude of far-west high Nepal has preserved food traditions unchanged for centuries."),
        ("Manāṅī Cuisine","Manāṅ district",
         "Apples (Manāṅ is Nepāl's apple country), apple brandy, yak cheese, <b>Tsampa</b>, and trader food influenced by both Tibet and the lowlands. Manāṅ's historic trading families developed a cosmopolitan cuisine despite the remote altitude."),
        ("Mustāṅ Cuisine","Upper Mustāṅ (Lo Monthāṅ)",
         "Tibetan-influenced: <b>Tsampa</b>, butter tea, yak products, and the unique <b>Jethī Dāl</b> (small heritage lentils prized for flavour). Mustāṅ is also famous for <b>Marfā apple products</b> — brandy, cider, dried apples."),
    ]
    for name, region, desc in foods:
        flows.append(ColorRect(f"<b>{name}</b>   <i>{region}</i>",
                               ST["h3"], bg=LGREY, border_color=GOLD, pad_h=10, pad_v=4))
        flows.append(body(desc))
        flows.append(Spacer(1, 2*mm))

    flows += section_head("Street Food & Snacks")
    sf = [
        "<b>Momoḥ</b> — steamed dumplings (vegetable, chicken, buffalo, pork) with spicy tomato achār. Now the most eaten street food in Nepāl.",
        "<b>Chatpate</b> — puffed rice, spiced vegetables, lemon, chilli, mustard oil. A Kāṭhmāṇḍu street staple.",
        "<b>Sel Roṭī</b> — crispy ring-shaped rice bread deep-fried in mustard oil. Made at Dashain and Tihāra.",
        "<b>Aloo Chop</b> — spiced potato in crispy coating.",
        "<b>Samosā</b> — fried pastry with spiced potato filling; the Indian version fully adopted.",
        "<b>Jalebi</b> — spiral-shaped deep-fried sweets soaked in sugar syrup; sold at temple fairs.",
        "<b>Sisnuko Jhol</b> — nettle soup, a nutrient-dense mountain staple.",
        "<b>Dahi Chiurā</b> — beaten rice with yoghurt; the food of auspicious occasions and ceremonies.",
        "<b>Chhang (Chang)</b> — millet or rice beer; home-brewed across the hills.",
        "<b>Toṅbā</b> — fermented millet drunk through a bamboo straw, hot water added; the warming drink of the eastern hills.",
    ]
    flows += bullet_table(sf, cols=1)

    flows += section_head("Key Ingredients Unique to Nepāl")
    ings = [
        "<b>Ṭimur (Sichuan pepper)</b> — the citrusy, numbing spice from Nepāl's hills, essential in achār and Newār cuisine",
        "<b>Jimbu</b> — dried Himalayan herb (Allium) used in dāl and soups; only found in Nepal and Tibet",
        "<b>Gundruk</b> — fermented dried leafy greens; the Nepālī equivalent of kimchi",
        "<b>Sinki</b> — fermented radish root; pungent, sour, used in soups",
        "<b>Siltimur</b> — another Himalayan spice related to Sichuan pepper; aromatic and medicinal",
        "<b>Buckwheat (Phāpar)</b> — grown above 2,500 m; flour used for pancakes and noodles in mountain communities",
        "<b>Yomari</b> — Newār steamed dumpling filled with molasses and sesame or khuwa; made only at Yomari Pūrṇimā",
    ]
    flows += bullet_table(ings, cols=1)
    return flows

def build_trekking():
    flows = chapter_header(
        "Chapter 7: Trekking Guide",
        "The world's greatest trekking destination — preparation, permits, altitude, and ethics"
    )
    flows += img("trekking", caption="The Annapūrṇā Circuit — one of the world's most celebrated long-distance treks, circling a massif of 8,000-metre peaks")

    flows += section_head("Best Seasons for Trekking")
    seasons_t = [
        ("Vasanta / Spring  (March–May)", "EXCELLENT",
         "Rhododendrons bloom. Clear mornings before afternoon cloud builds. Annapūrṇā and Everest regions ideal. Trails busy — book accommodation in advance."),
        ("Varṣā / Monsoon  (June–Aug)", "DIFFICULT (exceptions apply)",
         "Trails slippery with leeches, rivers in flood, views obscured. Exception: <b>Mustāṅ, Dolpo, and Manāṅ</b> lie in the Himalayan rain shadow and remain accessible — 'hidden valley' treks."),
        ("Śarada / Autumn  (Sept–Nov)", "BEST SEASON",
         "The finest trekking weather in the world. Crystal-clear post-monsoon skies. Stable temperatures. Peak-season crowds on Everest and Annapūrṇā circuits — book lodges well ahead."),
        ("Śiśira / Winter  (Dec–Feb)", "COLD BUT POSSIBLE",
         "High passes (above 4,500 m) may be snowed in. Lower-altitude treks (Helambu, lower Langtang, Ghandruk loop) work well. Fewer trekkers — better for photography and solitude."),
    ]
    rows = [[Paragraph(c, ST["bold"]) for c in ["Season", "Rating", "Notes"]]]
    for s, r, n in seasons_t:
        rows.append([Paragraph(s, ST["bodyL"]), Paragraph(r, ST["bold"]), Paragraph(n, ST["bodyL"])])
    t = Table(rows, colWidths=[48*mm, 25*mm, 97*mm])
    t.setStyle(TableStyle([
        ("BACKGROUND",(0,0),(-1,0),BLUE),("TEXTCOLOR",(0,0),(-1,0),WHITE),
        ("ROWBACKGROUNDS",(0,1),(-1,-1),[WHITE,LGREY]),
        ("GRID",(0,0),(-1,-1),0.3,colors.HexColor("#CCC")),
        ("VALIGN",(0,0),(-1,-1),"TOP"),("TOPPADDING",(0,0),(-1,-1),4),
        ("BOTTOMPADDING",(0,0),(-1,-1),4),("LEFTPADDING",(0,0),(-1,-1),4),
    ]))
    flows += [t, Spacer(1, 4*mm)]

    flows += section_head("Permits and Logistics")
    permits = [
        ("<b>TIMS Card</b> (Trekkers' Information Management System)", "Required for most treks in Nepāl. Costs USD 10–20 depending on whether booked through a trekking agency (green card) or independently (blue card). Obtained at TAAN or NTB offices in Kāṭhmāṇḍu and Pokhara."),
        ("<b>National Park / Conservation Area Permit</b>", "Required for entry into any protected area. Sagarmāthā NP: NPR 3,000. Annapūrṇā CA: NPR 3,000. Langtāṅ NP: NPR 3,000. Purchased at the park entry or Kāṭhmāṇḍu offices."),
        ("<b>Restricted Area Permit (RAP)</b>", "Required for Upper Mustāṅ, Dolpo, Humla, Kanchenjuṅgā, and other restricted zones. Must be obtained through a registered trekking agency. Costs USD 50–500/week depending on area."),
        ("<b>Registered Guide / Porter</b>", "Trekking alone without a guide is not permitted in some restricted areas and is strongly discouraged in all remote areas. Registered guides speak English, know the terrain, and can handle medical emergencies. Porter daily rates: USD 15–25; guide: USD 25–40."),
    ]
    for title, desc in permits:
        flows.append(Paragraph(title, ST["h4"]))
        flows.append(body(desc))
        flows.append(Spacer(1, 2*mm))

    flows += section_head("Altitude Sickness (AMS — Acute Mountain Sickness)")
    flows.append(ColorRect(
        "IMPORTANT: Altitude sickness can be fatal. Know the symptoms and the golden rule.",
        ST["bold"], bg=colors.HexColor("#FFF0F0"), border_color=RED, pad_h=12, pad_v=6
    ))
    flows.append(Spacer(1, 2*mm))
    flows.append(body(
        "AMS occurs when the body does not acclimatise quickly enough to reduced oxygen at "
        "altitude. It can affect anyone regardless of fitness. The key risk elevations are "
        "above <b>2,500 m</b> for mild AMS and above <b>3,500 m</b> for serious risk of "
        "High Altitude Pulmonary Edema (HAPE) or High Altitude Cerebral Edema (HACE), "
        "both of which are life-threatening."
    ))
    flows.append(Spacer(1, 2*mm))
    ams = [
        ("Mild AMS Symptoms","Headache, nausea, fatigue, dizziness, poor sleep. Normal above 3,000 m. <b>Rest at same altitude for one day.</b> Do not ascend until symptoms resolve."),
        ("Serious AMS Symptoms","Severe headache unresponsive to ibuprofen, vomiting, difficulty walking straight, confusion, breathlessness at rest, persistent cough. <b>DESCEND IMMEDIATELY. Do not wait for morning.</b>"),
        ("HACE","High Altitude Cerebral Edema — fluid in the brain. Signs: confusion, inability to walk, hallucinations. <b>Emergency descent + supplemental oxygen + Dexamethasone if available.</b>"),
        ("HAPE","High Altitude Pulmonary Edema — fluid in the lungs. Signs: crackling breath sounds, pink frothy sputum, severe breathlessness even at rest. <b>Emergency descent + supplemental oxygen + Nifedipine if available.</b>"),
        ("Prevention","Ascend slowly: <i>'climb high, sleep low.'</i> Above 3,000 m, gain no more than 300–500 m of sleeping altitude per day. Rest days every 2–3 days. Hydrate well (4+ litres/day). Acetazolamide (Diamox) may help; consult a doctor before trekking."),
    ]
    for title, desc in ams:
        flows.append(Paragraph(f"<b>{title}</b>", ST["h4"]))
        flows.append(body(desc))
        flows.append(Spacer(1, 2*mm))

    flows += section_head("Essential Trekking Gear Checklist")
    gear = [
        "Layered clothing: base layer, fleece mid-layer, waterproof shell",
        "Down jacket (essential above 3,500 m in any season)",
        "Waterproof trekking boots — well broken-in before you go",
        "Trekking poles — reduces knee strain on descents by ~25%",
        "Sleeping bag rated to -10°C for high-altitude treks",
        "Headlamp with spare batteries",
        "Water purification (filter, UV pen, or iodine tablets)",
        "First-aid kit including blister care, ibuprofen, Diamox, rehydration salts",
        "Sun protection: SPF 50+ cream, UV sunglasses, hat — UV is intense at altitude",
        "Snacks: nuts, energy bars, dried fruit for between lodge meals",
        "Portable charger for camera and phone — some lodges charge for electricity",
        "Cash in Nepālese Rupees — cards rarely accepted above major towns",
        "Trekking permit documents (TIMS, park permits) in waterproof pouch",
        "Emergency whistle and space blanket",
    ]
    flows += bullet_table(gear, cols=2)

    flows += section_head("Trekking Ethics")
    ethics = [
        "Carry out all waste — including plastic bottles. Tea houses in the hills have no disposal infrastructure.",
        "Use lodge solar showers rather than open-air bathing in glacial streams.",
        "Pay fair wages to porters. Ensure they have adequate clothing for the altitude.",
        "Don't pick plants, disturb wildlife, or remove stones from prayer walls (maṇī walls).",
        "Respect local culture in villages — ask before photographing, dress modestly near temples.",
        "Lodge meals support local families — eat local food rather than importing packaged food.",
    ]
    flows += bullet_table(ethics, cols=1)
    return flows

def build_places():
    flows = chapter_header(
        "Chapter 8: Places to Visit",
        "Trek routes, temples, monasteries, lakes, adventures, and UNESCO sites"
    )
    flows += img("everest", caption="Sagarmāthā (Everest) from the Khumbu region — the world's highest summit at 8,848.86 metres")

    flows += top10_table("Top 10 Trekking Routes", [
        ("Annapūrṇā Circuit",    "14–21 days. Circumnavigates the entire Annapūrṇā massif. Crosses Thorung La pass (5,416 m). Diverse landscapes from subtropical forest to high-altitude desert. One of the world's classic treks."),
        ("Everest Base Camp (EBC)", "12–14 days. Flies to Lukla, walks via Namche Bāzār, Tengboche, Dingboche to 5,364 m base camp. Passes Śerpā villages, monasteries, and glaciers. Kāla Pattar (5,643 m) gives the best Everest views."),
        ("Annapūrṇā Base Camp (ABC)", "10–12 days. Through the Mādi Kholavalley and Modi Kholā gorge into the Annapūrṇā sanctuary. Surrounded by 360° of 7,000–8,091 m peaks. Accessible from Pokhara."),
        ("Langtāṅ Valley",       "7–10 days. The 'valley closest to heaven' — north of Kāṭhmāṇḍu near the Tibetan border. Yak pastures, Tibetan Buddhist gompas, and views of Langtāṅ Lirung (7,227 m). Badly damaged in 2015 earthquake; beautifully rebuilt."),
        ("Manaslu Circuit",      "14–16 days. Around Manāslu (8,163 m), the world's eighth-highest peak. A quieter alternative to Annapūrṇā Circuit; similar terrain crossing Larkya La pass (5,160 m). Requires restricted area permit."),
        ("Upper Mustāṅ",         "14–18 days. The 'Forbidden Kingdom' — a Tibetan Buddhist enclave north of the Himālaya. Ancient cave monasteries, mud-brick walled towns (Lo Monthāṅ), dramatic canyon landscapes. Restricted area permit: USD 500/10 days."),
        ("Gokyo Lakes",          "12–14 days. Alternative EBC route via the emerald-green Gokyo chain of lakes and Gokyo Ri (5,357 m). Less crowded than the main EBC trail; stunning view of four 8,000-metre peaks at once."),
        ("Dolpo Trek",           "14–28 days. One of the most remote treks in the world. Upper Dolpo is the setting of Peter Matthiessen's 'The Snow Leopard'. Shey Phoksundo Lake (deepest in Nepāl), Bon Buddhist monasteries. Requires restricted area permit."),
        ("Kanchenjuṅgā Base Camp","20–25 days. Nepāl's most remote long-distance trek, accessing both north and south base camps of the world's third-highest peak. Almost no commercial tourism — true wilderness trekking."),
        ("Helambu / Gosāinkuṇḍa","5–12 days. Closest quality trek to Kāṭhmāṇḍu (1–2 hours by bus to trailhead). Gosāinkuṇḍa sacred lake (4,380 m) is the goal for the longer version. Good for acclimatisation or limited time."),
    ])

    flows += top10_table("Top 10 Scenic Spots", [
        ("Poon Hill / Ghorepānī", "3,210 m viewpoint above the Annapūrṇā foothills. Pre-dawn hike rewarded with a panorama of Dhaulagirī, Annapūrṇā, and Machapuchare (Fishtail) at sunrise. Reachable in 3–4 days from Pokhara."),
        ("Saraṅkot, Pokhara",    "1,592 m above Pokhara's Phewā Lake. Sunrise over Annapūrṇā South and Machapuchare reflected in the lake. Also Nepāl's premier paragliding launch point."),
        ("Nāgarkot",             "2,175 m east of Kāṭhmāṇḍu. On clear winter mornings, sunrise reveals a 180° panorama of the Himalaya from Dhaulagirī to Kanchenjuṅgā. Accessible by bus or taxi from the capital."),
        ("Phewā Tal, Pokhara",   "Nepāl's second-largest lake, ringed by forested hills with a perfect reflection of Machapuchare on still mornings. Rowboat hire, lakeside cafés, the Tal Barāhī island temple."),
        ("Rārā Lake",            "3,060 m, northwestern Nepāl. The largest lake in Nepāl — pristine, turquoise, surrounded by pine and Himalayan oak forest. Accessible by small aircraft to Rāra; virtually no crowds."),
        ("Gosāinkuṇḍa",         "4,380 m, Rasuwa district. Sacred alpine lake formed, according to myth, when Śiva plunged his trident into the mountain to release water after swallowing poison. Pilgrimage destination for Śivarātri."),
        ("Tilicho Lake",         "4,919 m — one of the world's highest lakes, within the Annapūrṇā Conservation Area. Side-trip off the Annapūrṇā Circuit. Otherworldly landscape of ice-blue water and black rock."),
        ("Chitwan National Park", "Terai jungle at its most accessible. Elephant grass, one-horned rhinos, Royal Bengal tigers, gharial crocodiles, and over 500 bird species. Jeep and canoe safaris."),
        ("Bardiyā National Park", "Far-west Terai — the best chance of seeing a Royal Bengal tiger in the wild. Far fewer visitors than Chitwan. The Karnālī river runs through it; river dolphin sightings possible."),
        ("Poon Hill Sunrise",    "See #1 above — listed separately as the single most photographed scene in all of Nepāl's trekking landscape."),
    ])

    flows += img("boudhanath", caption="Boudhanātha Stūpa — one of the world's largest Buddhist stūpas, a living centre of Tibetan Buddhist culture in Kāṭhmāṇḍu")

    flows += top10_table("Top 10 Hindu Temples", [
        ("Paśupatinātha, Kāṭhmāṇḍu", "Most sacred Śiva temple in the Himalayan world. Main liṅga (Caturmukha — four-faced) in the inner sanctum. Cremation ghāṭs on the Bāgmatī. UNESCO World Heritage. Non-Hindus observe from across the river."),
        ("Mānakāmanā, Gorkhā",       "Wish-fulfilling goddess Mānakāmanā on a ridge in Gorkhā, accessible by cable car from Trisulī valley. Possibly the most regularly visited temple in Nepāl by sheer numbers."),
        ("Chaṅgu Nārāyaṇa, Bhaktapur","Nepal's oldest surviving temple (5th century CE Licchavī inscriptions). UNESCO World Heritage. Finest collection of ancient stone sculpture in the country."),
        ("Janakī Mandir, Janakpur",   "White palace-temple built in 1910 at the site of Sītā's birth and childhood in ancient Mithilā. Centre of the annual Vivāha Pañcamī festival re-enacting Rāma and Sītā's wedding."),
        ("Muktinātha, Mustāṅ",        "3,710 m — sacred to both Hindus (Viṣṇu temple) and Tibetan Buddhists. 108 water spouts, a natural gas flame, and a spring. One of Nepāl's Char Dhāma. Bathing in all 108 spouts considered cleansing of many lifetimes' karma."),
        ("Dakṣiṇakālī, Pharping",     "Fierce Kālī temple south of Kāṭhmāṇḍu in a forested gorge. Large animal sacrifices on Saturdays and Tuesdays. One of the most powerful Śakti shrines in the valley."),
        ("Budhanīlakaṇṭha",           "Colossal reclining Viṣṇu carved from a single black stone, lying in a sacred pool north of Kāṭhmāṇḍu. Dating from the Licchavī period. Kings of Nepāl were traditionally forbidden from viewing it."),
        ("Bindhyāsinī, Pokhara",      "Patron goddess of Pokhara, standing on a hilltop with views of the Annapūrṇā range. Centre of Pokhara's ritual life; most significant shrine in the western hills."),
        ("Kalinchowk Bhagavatī, Dolākha","Kālī temple at 3,842 m, accessible by cable car. Panoramic views of Gauriśaṅkar. Especially crowded during both Daśain seasons. Devotees believe the goddess answers prayers with great speed."),
        ("Halesi-Mahādeva, Khoṭāṅ",   "Sacred cave-temple considered one of the most powerful Śiva sites in eastern Nepāl. The cave's natural formations are revered as Śiva's face. Pilgrimage site for Hindus and Buddhists alike."),
    ])

    flows += top10_table("Top 10 Buddhist Monasteries & Stūpas", [
        ("Boudhanātha Stūpa, Kāṭhmāṇḍu", "One of the world's largest stūpas; the centre of Tibetan Buddhism outside Tibet. White-domed base, gold tower with the Buddha's all-seeing eyes. Daily circumambulation (kora) by monks and laypeople. UNESCO World Heritage."),
        ("Svayambhunātha, Kāṭhmāṇḍu",   "The Monkey Temple — 2,500+ years old. Self-arisen flame enshrined under white dome. 365 steps to the summit, lined with prayer wheels. UNESCO World Heritage. Worshipped by both Hindus and Buddhists."),
        ("Tengboche Monastery, Khumbu",  "The most dramatically located monastery in Nepāl — at 3,867 m with full view of Everest, Amadablam, and Lhotsē. Nyingma tradition. Mani Rimdu festival (November) draws trekkers from the region."),
        ("Namo Buddha (Thrangu Taśī Yaṅtse)", "On a forested ridge east of Kāṭhmāṇḍu. Sacred site where the Bodhisattva Mahāsattva offered his body to a starving tigress. Major Kagyu monastery; meditation courses available."),
        ("Kopān Monastery, Kāṭhmāṇḍu",  "Above Boudhanātha, this Gelug-tradition monastery offers one-month meditation courses attracting students from around the world. Founded by Lāmā Thubten Yeshe."),
        ("Shechen Monastery, Boudha",    "One of the largest Nyingma monasteries outside Tibet, founded by Dilgo Khyentse Rinpoche. Magnificent assembly hall with spectacular murals."),
        ("Thubchen Gompa, Lo Monthāṅ",  "15th-century monastery in the walled city of Lo Monthāṅ, Upper Mustāṅ. Contains magnificent ancient murals and a vast library of Tibetan texts."),
        ("Patan Mahavihar (Golden Temple)", "12th-century monastery in the heart of Pāṭan Darbar Square. Gilded copper roof and exquisite metal-work. The deity Svarne-Bhagavatī is worshipped here daily."),
        ("Namobuddha Monastery",         "Above Namo Buddha stūpa (separate from the monastery of the same name), with sweeping views of the Himalaya. Active retreat centre."),
        ("Jampa Lhakhang, Tsum Valley",  "Remote valley north of Gorkhā, bordering Tibet — one of Nepāl's last truly isolated Tibetan Buddhist enclaves. Ancient temples and a living culture untouched by modernity."),
    ])

    flows += top10_table("Top 10 Retreats & Spiritual Places", [
        ("Lumbinī",              "Birthplace of Siddhārtha Gautama, the Buddha (c.563 BCE). UNESCO World Heritage Site. The sacred garden, Māyadevī temple (over Buddha's birth spot), and the Aśokan Pillar (3rd century BCE). Over 20 international Buddhist monasteries surround the garden."),
        ("Devghāṭa (Devghat)",   "Confluence of the Seti Gandakī and Trisulī rivers, becoming the Nārāyaṇī. Hindus believe dying here grants mokṣa. Elderly Nepālīs come to spend their final days. Makar Saṅkrānti pilgrimage (Jan) draws 100,000+ people."),
        ("Gosāinkuṇḍa",         "Sacred Śiva lake at 4,380 m. Śivarātri pilgrimage. Said to have formed when Śiva released water after swallowing the poison of the Samudra Manthana. Surrounded by smaller sacred lakes."),
        ("Muktinātha",           "Liberation temple at 3,710 m. The natural flame + 108 water spouts + natural spring at the same site is considered miraculous. Equally sacred to Vaishnavites, Śaivites, and Tibetan Buddhists."),
        ("Namo Buddha",          "Where the Bodhisattva Mahāsattva fed himself to a starving tigress. One of the three most sacred Tibetan Buddhist sites in Nepāl. Monastery perched above the site."),
        ("Paśupatinātha Āśrama complex","Beyond the main temple, a network of āśramas (hermitages) along the Bāgmatī where sādhus (wandering ascetics) live year-round. A living medieval religious world alongside a modern capital city."),
        ("Halesi Cave",          "Sacred cave in eastern Nepāl where Śiva is said to have hidden from the demon Bhasmasura. Natural cave formations worshipped as Śiva's presence. Both Hindu and Bon pilgrims."),
        ("Rīḍī Bāzār, Palpa",   "Sacred confluence of the Kālī Gaṇḍakī and Rīḍī Kholā — one of the most ancient pilgrimage sites in western Nepāl. The Ṛṣīkeśa Nārāyaṇa temple and the Śāligrāma fossils found here are considered especially sacred."),
        ("Barāha Kṣetra, Sunsarī","Sacred confluence of the Kośī and Saptakoshi rivers — where Viṣṇu as Varāha (boar avatar) is believed to have emerged from the earth. One of Nepāl's Char Dhāma. Especially significant at Makar Saṅkrānti."),
        ("Pharping (combined sites)","South of Kāṭhmāṇḍu: Śeśa Nārāyaṇa temple (spring at cliff base), Dakṣiṇakālī, Yanglesho Cave (where Guru Rinpoche attained Vajrakīlaya realisation). A uniquely layered Hindu-Buddhist sacred landscape."),
    ])

    flows += top10_table("UNESCO World Heritage Sites in Nepāl", [
        ("Kāṭhmāṇḍu Darbar Square",  "Royal palace complex of the medieval capital with Taleju temple, Kumārī Bahal, Hanumān Ḍhokā, and dozens of courtyards. Damaged in 2015; actively being restored."),
        ("Pāṭan Darbar Square",       "Lalitapur's ancient royal square — considered by many the finest mediaeval architecture in the valley. Krishna Mandir (all-stone), Bhairavanātha, Viśvanātha."),
        ("Bhaktapur Darbar Square",   "Best-preserved of the three squares. The 55-Window Palace, Nyātapola Temple (tallest pagoda in Nepāl at 30 m), Bhairavanātha temple."),
        ("Svayambhunātha",            "2,500-year-old hilltop stūpa. The eternal-flame origin myth of the Kāṭhmāṇḍu Valley."),
        ("Paśupatinātha",             "Most sacred Śiva temple in the world. Four-faced liṅga, Ārya Ghāṭa cremation site on the Bāgmatī."),
        ("Boudhanātha",               "Largest stūpa in Nepāl; greatest centre of Tibetan Buddhist culture outside Tibet."),
        ("Chaṅgu Nārāyaṇa",          "Nepal's oldest temple — 5th-century Licchavī inscriptions; finest collection of ancient Hindu sculpture."),
        ("Lumbinī",                   "Birthplace of the Buddha. Māyadevī temple, sacred garden, Aśokan pillar (249 BCE), international monastery zone."),
        ("Sagarmāthā National Park",  "Everest region. The world's highest peaks, Śerpā culture, glaciers, and alpine ecosystem."),
        ("Chitwan National Park",     "Globally important habitat for one-horned rhinoceros, Royal Bengal tiger, gharial crocodile, and Gangetic river dolphin."),
        ("Kanchenjuṅgā Conservation Area","Tri-junction of Nepāl, India, and Bhutan. Exceptional biodiversity; nominated for serial transboundary WHS status."),
    ])

    flows += top10_table("Top 10 National Parks & Conservation Areas", [
        ("Sagarmāthā National Park",        "Everest region; 1,148 km². World's highest peaks, Śerpā culture, snow leopard, himalayan tahr."),
        ("Chitwan National Park",           "Terai lowland jungle; 952 km². One-horned rhino, tiger, gharial. UNESCO WHS. Best wildlife park in South Asia."),
        ("Annapūrṇā Conservation Area",     "Largest protected area in Nepāl at 7,629 km². Includes the Annapūrṇā Circuit and Sanctuary. Rich cultural diversity."),
        ("Langtāṅ National Park",           "North of Kāṭhmāṇḍu; 1,710 km². Red panda, snow leopard, langur monkeys. Beautiful valley trek."),
        ("Bardiyā National Park",           "Western Terai; 968 km². Best tiger-viewing in Nepāl. Gangetic dolphin in the Karnālī river."),
        ("Rārā National Park",              "Smallest NP (106 km²) but contains Rārā Lake — the most pristine lake in Nepāl. Almost no visitors."),
        ("Makālu-Barun National Park",      "East Nepāl; 1,500 km². Buffer to Sagarmāthā NP. Extraordinary biodiversity including snow leopard and red panda."),
        ("Śivapurī-Nāgārjun National Park", "Just north of Kāṭhmāṇḍu city; 159 km². Drinking water catchment forest. Day hikes from the capital."),
        ("Khapta National Park",            "Far-west; 225 km². Remote grasslands, Khaptad Meadow, sacred lake. Rustic and unchanged."),
        ("Api Nāmpā Conservation Area",     "Extreme far-west; 1,903 km². On the Nepal-India-China tri-junction. Snow leopard, blue sheep, near-unvisited wilderness."),
    ])

    flows += top10_table("Top 10 Adventures", [
        ("Paragliding, Pokhara",        "Launch from Saraṅkot at 1,592 m, land at Phewā lakeside. 30–45 minutes soaring above the Annapūrṇā range with a tandem pilot. Rated among the world's top five paragliding destinations."),
        ("White-Water Rafting",         "Trisulī River (Grade III-IV, accessible from Kāṭhmāṇḍu), Bhoṭekośī (Grade IV-V, Nepal's steepest commercial raft), Seti, Karnālī (multi-day wilderness expedition)."),
        ("Bungee Jumping, Bhoṭekośī",   "160-metre drop from a suspension bridge over the Bhoṭekośī river gorge — one of the world's highest bungee drops. 3 hours from Kāṭhmāṇḍu."),
        ("Zip-line, Pokhara",           "2.4 km zip at 120 km/h over the Saraṅkot ridge — among the world's longest and steepest zip lines. Views of Phewā Lake and Annapūrṇā."),
        ("Helicopter to Everest Base Camp","Skip the 14-day walk and fly by helicopter to EBC (5,364 m) or Kāla Pattar (5,643 m). 1–3-hour scenic flights available from Kāṭhmāṇḍu. A transformative experience for those with limited time."),
        ("Mountain Biking",             "Kāṭhmāṇḍu Valley trails, Mustāṅ mountain biking circuit (permit required), Kathmandu-Pokhara back roads. Multi-day guided MTB expeditions available."),
        ("Skydiving over the Himalaya", "Tandem skydives from 5,500 m over the Everest region — the world's highest skydive venue. Available seasonally out of Syāṅgboche airstrip."),
        ("Elephant Safari, Chitwan",    "Dawn jeep or elephant safari in the tall elephant grass tracking rhinos, tigers, and leopards. Night in a jungle camp."),
        ("Canyoning",                   "Multiple canyons near Kāṭhmāṇḍu (Sundarijal, Jalbire) — rappelling waterfalls, jumping pools, natural water slides. Half-day and full-day options."),
        ("Rock Climbing",               "Nāgārjun Forest and Hattibān cliffs near Kāṭhmāṇḍu offer bolted sport climbing routes. Pokhara's cliff faces are also developing. Multi-pitch trad routes for experienced climbers."),
    ])

    flows += top10_table("Top 10 Lakes", [
        ("Phewā Tal, Pokhara",          "Second-largest lake in Nepāl (4.43 km²). Machapuchare and Annapūrṇā South perfectly reflected on still mornings. Tal Barāhī island temple accessible by rowboat."),
        ("Rārā Lake, Mugu",             "Largest lake in Nepāl (10.8 km²). At 3,060 m in a pristine National Park. Deep blue water surrounded by pine forests; one of Nepāl's great treasures."),
        ("Gosāinkuṇḍa, Rasuwa",        "Sacred alpine lake at 4,380 m. Formed in mythology when Śiva plunged his trident to release water after swallowing poison. Pilgrimage for Śivarātri."),
        ("Tilicho Lake, Manāṅ",         "At 4,919 m — one of the world's highest lakes. Vivid blue surrounded by black rock and glaciers. Accessible as a side-trip from the Annapūrṇā Circuit."),
        ("Shey Phoksundo, Dolpo",       "Deepest lake in Nepāl (145 m) at 3,611 m. Extraordinary turquoise colour. Setting for Peter Matthiessen's 'The Snow Leopard'. Remote and rarely visited."),
        ("Begnas Tal, Pokhara",         "Third-largest lake in Nepāl. Quiet and peaceful compared to Phewā; favoured for birdwatching (over 200 species) and kayaking."),
        ("Sukunda Lake, Sindhupalcok",  "Sacred lake east of Kāṭhmāṇḍu at 2,980 m. Shrines to Śiva and Śakti. Pilgrimage on Janaī Pūrṇimā."),
        ("Dudh Kuṇḍa, Solukhumbu",     "4,560 m — sacred lake of the Rāī Kirant people; bathing at the full moon of Kārtika is a major pilgrimage. Crystal-clear glacial water."),
        ("Khaptad Lake",                "Sacred lake within Khaptad National Park, far-west Nepāl. Spiritual site associated with the sage Khaptad Bābā, who meditated here for decades."),
        ("Nāgdaha, Lalitpur",          "Mythological lake of the Kāṭhmāṇḍu Valley — the last remnant of the great Nāgadaha that once filled the valley before Mañjuśrī drained it. Sacred to the Nāga serpents."),
    ])
    return flows
