#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Part 3: Geography, Culture (festivals, jatras, dances, astrology, dos/don'ts)"""
from nepal_guide_part1 import *

def build_geography():
    flows = chapter_header(
        "Chapter 4: Geography & the Six Seasons",
        "From jungle to glacier in 200 kilometres"
    )
    flows += img("mountains", caption="Nepal's extraordinary gradient — tropical Terai in the foreground, 8,000-metre peaks on the horizon")

    flows += section_head("Three Physiographic Zones")
    zones = [
        ("Terai (Inner & Outer)", "Elevation: 70–300 m", "The flat southern lowlands bordering India. Subtropical climate, dense sal forest, fertile farmland. Home to Tharu, Maithilī, and Bhojpurī communities. Contains Chitwan and Bardia national parks — habitat of the one-horned rhinoceros and Royal Bengal tiger."),
        ("Pahāḍ — the Hill Zone", "Elevation: 300–3,000 m", "Terraced hillsides of millet, maize, and rice. The most densely settled region, home to Gurung, Magar, Newar, Rāī, Limbu, and Bahun-Chetrī communities. Contains Kathmandu, Pokhara, and most of Nepal's historic towns and temples."),
        ("Himal — the High Himalaya", "Elevation: 3,000–8,849 m", "Snow-capped peaks, glaciers, and alpine pastures above the tree line. Inhabited by Sherpa, Tibetan, Mustānge, and other Tibeto-Burman peoples. The source of Nepal's great river systems and home to the world's highest trekking routes."),
    ]
    for name, elev, desc in zones:
        flows.append(ColorRect(f"<b>{name}</b>  <i>({elev})</i>", ST["h3"],
                               bg=LGREY, border_color=GOLD, pad_h=10, pad_v=5))
        flows.append(body(desc))
        flows.append(Spacer(1, 3*mm))

    flows += section_head("Rivers and Water")
    flows.append(body(
        "Nepal is the source of three of Asia's great river systems, all flowing south into "
        "India's Ganges plain:"
    ))
    rivers = [
        "Koshi (Koshi) — rises in Tibet, drains eastern Nepal; sacred for the Kirant people",
        "Gandaki (Gandaki) — includes the Kālī Gandaki, Trisuli, and Myāgdī; flows through the Annapurna massif",
        "Karnali (Karnali) — Nepal's longest river, rising near Lake Mānasovarar in Tibet; drains far-west Nepal",
        "Bagmati — the sacred river of Kathmandu, flowing past Paśupatinātha; flows into the Ganges in India",
    ]
    flows += bullet_table(rivers, cols=1)

    flows += section_head("The Eight-Thousanders in Nepal")
    peaks = [
        ("Sagarmatha", "8,848.86 m", "Everest — 'Forehead of the Sky' (Nepalī)"),
        ("Kanchenjunga","8,586 m",  "Third highest; on the Nepal–Sikkim border"),
        ("Lhotse",       "8,516 m",  "Connected to Everest massif; fourth highest"),
        ("Makalu",      "8,463 m",  "Isolated five-sided pyramid; fifth highest"),
        ("Cho Oyu",     "8,188 m",  "Sixth highest; straddles the Nepal–Tibet border"),
        ("Dhaulagiri",  "8,167 m",  "'White Mountain'; isolated massif near Pokhara"),
        ("Manaslu",     "8,163 m",  "'Mountain of the Spirit'; Gorkha district"),
        ("Annapurna I", "8,091 m",  "Lowest of the eight-thousanders; most dangerous by fatality ratio"),
    ]
    rows = [[Paragraph(c, ST["bold"]) for c in ["Peak","Height","Notes"]]]
    for p, h, n in peaks:
        rows.append([Paragraph(p, ST["phrase_np"]), Paragraph(h, ST["bodyL"]), Paragraph(n, ST["bodyL"])])
    t = Table(rows, colWidths=[45*mm, 25*mm, 100*mm])
    t.setStyle(TableStyle([
        ("BACKGROUND",(0,0),(-1,0),RED),("TEXTCOLOR",(0,0),(-1,0),WHITE),
        ("ROWBACKGROUNDS",(0,1),(-1,-1),[WHITE,LGREY]),
        ("GRID",(0,0),(-1,-1),0.3,colors.HexColor("#CCC")),
        ("VALIGN",(0,0),(-1,-1),"TOP"),("TOPPADDING",(0,0),(-1,-1),4),
        ("BOTTOMPADDING",(0,0),(-1,-1),4),("LEFTPADDING",(0,0),(-1,-1),5),
    ]))
    flows += [t, Spacer(1, 5*mm)]

    flows += section_head("The Six Seasons of Nepal")
    flows.append(body(
        "Unlike the Western four-season model, traditional Nepalī culture recognises "
        "<b>six seasons (ṣaḍṛtu)</b>, derived from the ancient Hindu calendar — each lasting "
        "two months of the Bikram Saṃvat year."
    ))
    flows.append(Spacer(1, 2*mm))
    seasons = [
        ("1. Vasanta ऋतु — Spring",        "Caitra–Vaiśākha (mid-March – mid-May)",
         "Rhododendrons bloom across the hills in waves of crimson and pink. Best season for trekking in the Annapurna and Everest regions. Festivals of Caitra Dashain, Rām Navamī, and Nepalī New Year (Baisakh 1)."),
        ("2. Grīṣma ṛtu — Summer / Pre-monsoon","Jyaiṣṭha–Āṣāḍha (mid-May – mid-July)",
         "Hot and increasingly humid. Rain begins building in the lower hills. The Buddha Jayantī festival falls in Vaiśākha. Trekking to higher altitudes still possible."),
        ("3. Varṣā ṛtu — Monsoon",         "Śrāvaṇa–Bhādra (mid-July – mid-September)",
         "The lifeblood of Nepal. Roughly 80% of annual rainfall arrives in three months. The hills turn impossibly green. Rice paddies fill. Trekking is difficult due to leeches and flooded trails, but Mustang (in the rain shadow) remains accessible."),
        ("4. Śarada ṛtu — Autumn",         "Āśvina–Kārtika (mid-September – mid-November)",
         "The finest season in Nepal — clear skies, cool temperatures, and the Himalaya sharply visible after the monsoon rains. Peak festival season: Dashain, Tihar, Chhaṭha Pūjā. Peak trekking season."),
        ("5. Hemanta ṛtu — Pre-winter",     "Mārgaśīrṣa–Pauṣa (mid-November – mid-January)",
         "Cool and dry. Mornings in Kathmandu drop to near 0°C; snowfall on passes above 3,500 m. The Terai is pleasantly warm. Maghe Sankranti festival falls in Māgha."),
        ("6. Śiśira ṛtu — Winter",          "Māgha–Phālguna (mid-January – mid-March)",
         "The coldest months. Upper elevations are inaccessible. The Terai is the main destination — Chitwan safaris, Janakpur pilgrimage. Śivarātri (Śiva's night) brings hundreds of thousands of pilgrims to Paśupatinātha in Phālguna."),
    ]
    for name, months, desc in seasons:
        flows.append(ColorRect(f"<b>{name}</b>   <i>{months}</i>",
                               ST["h3"], bg=LGREY, border_color=GOLD, pad_h=10, pad_v=5))
        flows.append(body(desc))
        flows.append(Spacer(1, 3*mm))
    return flows

def build_culture():
    flows = chapter_header(
        "Chapter 5: Culture",
        "125 peoples, one nation — festivals, dances, astrology, and living traditions"
    )
    flows += img("festival", caption="Dashain celebrations — the most important festival in the Nepalī year, marking Durgā's victory over the demon Mahiṣāsura")

    flows += section_head("Diversity and Daily Life")
    flows.append(body(
        "Nepal officially recognises <b>125 ethnic/caste groups</b> and over <b>123 languages</b>. "
        "The <b>Newar</b> people of the Kathmandu Valley built the valley's extraordinary "
        "architectural heritage over two millennia. The <b>Sherpa</b> of the high Khumbu region "
        "are renowned mountaineers and guardians of Tibetan Buddhist culture. The <b>Tharu</b> "
        "of the western Terai have resisted malaria through generations and maintain their "
        "own rich performance traditions. The <b>Gurung, Magar, Rāī, Limbu</b> hill peoples "
        "contributed the Gurkha soldiers who became legendary worldwide."
    ))
    flows.append(Spacer(1, 2*mm))
    flows.append(body(
        "Daily life across Nepal is structured by <b>dharma</b> — one's duty in accordance with "
        "family, community, and cosmic order. The day begins with pūjā (worship): lighting "
        "incense, offering flowers and water to household deities, applying tīkā (sacred powder). "
        "Dāl bhāṭa (lentil soup and rice) is eaten twice daily by most of the population. "
        "Guests are treated with genuine reverence, following the ancient principle:"
    ))
    flows.append(Spacer(1, 2*mm))
    flows.append(ColorRect(
        '"Atithi Devo Bhava" — अतिथि देवो भव',
        ST["h3"], bg=colors.HexColor("#FFF8F0"), border_color=GOLD, pad_h=12, pad_v=8
    ))
    flows.append(Paragraph(
        "The guest is God — a principle from the Taittirīya Upaniṣad that shapes how Nepalī "
        "families treat every visitor. A traveller arriving at a remote home will be offered "
        "tea, food, and shelter as a matter of honour, not transaction.",
        ST["body"]
    ))
    flows.append(Spacer(1, 3*mm))

    flows += section_head("Sacred Animals in Nepal")
    animals = [
        ("<b>Cow (Gāī)</b>", "National animal; considered an earthly form of Lakṣmī. Killing a cow was historically a criminal offence. Cows roam freely and must be treated with respect."),
        ("<b>Elephant (Hātī)</b>", "Vehicle of Indra, king of the gods; associated with Gaṇeśa. Kept in royal compounds and national parks; revered in the southern Terai."),
        ("<b>Dog (Kukur)</b>", "Sacred messenger of Yamārāja, god of death. During Tihar, every dog in the country — pet or street dog — receives a flower garland, tīkā, and a feast."),
        ("<b>Crow (Kāg)</b>", "Messenger between the living and the ancestors. The first day of Tihar (Kāg Tihar) is devoted to feeding crows before any human eats."),
        ("<b>Serpent (Nāga)</b>", "Ancient guardians of water and fertility; first inhabitants of the valley-lake. Worshipped on Nāga Pañcamī: images placed above doorways, milk offered at shrines."),
        ("<b>Peacock (Mayūra)</b>", "Vehicle of Kumāra (Kārttikeya); divine bird associated with beauty and rain. The national bird of Nepal."),
    ]
    for animal, desc in animals:
        flows.append(Paragraph(f"{animal}: {desc}", ST["body"]))
        flows.append(Spacer(1, 2*mm))

    flows += section_head("Festivals of Nepal")
    flows.append(body(
        "Nepal's festival calendar is one of the richest in the world. The Bikram Saṃvat "
        "lunar-solar calendar means festival dates shift annually against the Gregorian calendar."
    ))
    festivals = [
        ("Dashain (Dashain)", "Āśvina–Kārtika (Sep–Oct), 15 days",
         "The most important festival in Nepal — fifteen days honouring Durgā's victory over the buffalo-demon Mahiṣāsura. The main days: Phūlapātī (seventh, flowers brought), Mahāaṣṭamī (eighth, animal sacrifices at Kālī temples), Navamī (ninth, largest sacrifice day), Vijayā Daśamī (tenth, families gather for elders to apply jamārā — sprouted barley — and tīkā on foreheads). Government offices, banks, and schools close for the full ten main days. Traffic out of Kathmandu to home villages reaches fever pitch."),
        ("Tihar / Yamapañcaka", "Kārtika (Oct–Nov), 5 days",
         "The festival of lights. Five days: Kāg Tihar (crows), Kukur Tihar (dogs), Gāī Tihar + Lakṣmī Pūjā (cows + goddess of wealth), Goru Tihar / Nepal Saṃvat New Year, and Bhāī Ṭīkā (sisters apply seven-coloured tīkā on brothers for long life). Homes are lit with thousands of oil lamps on Lakṣmī Pūjā night — the goddess visits only clean, lit houses."),
        ("Holi", "Phālguna (Feb–Mar), 2 days (hills) / 1 day (Terai)",
         "The festival of colours, celebrating spring and the story of Prahlāda's devotion to Viṣṇu. Coloured powder (abīra) and water are thrown with joyful abandon. The Terai celebrates a day earlier than the hills. Bonfires (Holikā Dahan) on the night before mark the burning of the demoness Holikā."),
        ("Chhaṭha Pūjā", "Kārtika (Oct–Nov), 4 days",
         "Direct worship of Sūrya (the sun god) — unique in requiring no priest or temple. Devotees fast for 36 hours, standing waist-deep in rivers at sunset (Sandhyā Arghya) and sunrise (Uṣā Arghya) to offer baskets of fruit and sugarcane. Especially significant in the Madhesh (Terai) region."),
        ("Saune Sankranti", "Śrāvaṇa 1 (mid-July)",
         "The start of the Śrāvaṇa month — Śiva's most sacred month. Devotees fast on Mondays, visit Śiva temples, and offer bilva leaves. Women wear green glass bangles and green saris as a symbol of marital good fortune."),
        ("Tīja (Haritalikā Tīja)", "Bhādra (Aug–Sep)",
         "A women's festival — one of the most physically demanding. Women fast for 24 hours without food or water, dress in red (the colour of marriage), dance and sing devotional songs through the night, and worship Śiva and Pārvatī for their husbands' long life and good fortune."),
        ("Māghī", "Māgha 1 (mid-January)",
         "Tharu New Year — the most important festival for the Tharu people of the western Terai. Communities gather, elect village leaders, dance and feast. A transition of community roles and contracts."),
        ("Maghe Sankranti", "Māgha 1 (mid-January)",
         "The winter solstice festival — the sun enters Capricorn (Makara). Holy bathing at river confluences (especially Devghāṭa, Triveni, and Riḍī). Sesame seeds (til), molasses, sweet potato, and ghee are eaten — foods believed to generate body heat for winter."),
        ("Losar", "Phālguna or Māgha (Feb–Mar, varies by community)",
         "Tibetan–Buddhist New Year, celebrated most prominently by Sherpa, Gurung (Tamu Losar in December), and Tamang (Tamang Losar in January) communities. Prayer flags are raised, monasteries hold ceremonies, and communities feast together."),
        ("Śivarātri", "Phālguna dark fortnight (Feb–Mar)",
         "Śiva's great night — one of the holiest nights of the Hindu year. The Paśupatinātha complex in Kathmandu receives over a million pilgrims including tens of thousands of Hindu sādhus (holy men) from across South Asia, many arriving months in advance."),
        ("Indra Jātrā", "Bhādra (Aug–Sep), 8 days",
         "See Jātras section below — this is Kathmandu's most spectacular public festival."),
    ]
    for name, timing, desc in festivals:
        flows.append(ColorRect(f"<b>{name}</b>   <i>{timing}</i>",
                               ST["h3"], bg=LGREY, border_color=RED, pad_h=10, pad_v=4))
        flows.append(body(desc))
        flows.append(Spacer(1, 3*mm))

    flows += section_head("Jātras — Living Street Processions")
    flows.append(body(
        "A <b>Jātrā</b> is a public street procession — the deity is taken out of the temple "
        "and paraded through the city in a chariot or on a platform, blessing all who see. "
        "Nepal's Newar cities hold more Jātras than any comparable area on earth."
    ))
    flows.append(Spacer(1, 2*mm))
    jatras = [
        ("Indra Jātrā", "Kathmandu, Bhādra (Aug–Sep), 8 days",
         "The valley's greatest spectacle. The living Kumārī (child goddess), Gaṇeśa, and Bhairava are taken through the streets in towering wheeled chariots. The Lākhe demon-dancer performs nightly. Giant masked Bhairava faces discharge rice beer from their mouths at the Hanumān Ḍhokā. Inaugurated by Prithvi Narayan Shah to legitimise his conquest of Kathmandu."),
        ("Gāī Jātrā", "Kathmandu Valley, Bhādra (Aug–Sep)",
         "Families who have lost a member in the past year lead a cow (or a boy dressed as a cow) through the streets — the cow guides souls across the river Vaitaraṇī to Yamārāja's court. After the solemn procession, the day turns to satirical comedy: performers mock politicians, social problems, and the powerful in a rare officially permitted tradition of public satire."),
        ("Ghoḍe Jātrā", "Kathmandu's Tundikhel, Caitra (March–April)",
         "The Horse Festival — a military horse parade on the open ground of Tundikhel. Tradition holds that galloping horses drive away the demon Tuṇḍa buried beneath the ground. The army displays equestrian skills; the president attends."),
        ("Rato Matsyendranātha Jātrā", "Patan (Lalitapur), Caitra–Vaiśākha (April–May)",
         "The longest chariot festival in the world — the towering chariot of Rato (Red) Matsyendranātha, patron deity of the Kathmandu Valley and god of rain and harvest, is pulled through Patan over several months. The chariot can reach 18 metres in height. It culminates with the Bhaṭo Jātrā (see below)."),
        ("Banepa Jātrā", "Banepa, Caitra (March–April)",
         "The Chaṇḍeśvarī Jātrā of Banepa — the goddess Chaṇḍeśvarī's chariot is pulled through the ancient town. One of the major chariot festivals of the eastern valley."),
        ("Pānauti Jātrā", "Pānauti, Māgha (January–February), every 12 years",
         "Pānauti hosts the <b>Māgha Sṭhānaka Mela</b> — a great religious fair held every twelve years at the confluence of three rivers (Rośī, Puñyamatī, and the invisible Lūhku Nārāyaṇī). The 2020 mela drew hundreds of thousands of pilgrims. One of the most sacred pilgrimage sites near Kathmandu."),
        ("Biskā Jātrā", "Bhaktapur, Baisakh (April), New Year",
         "Bhaktapur's New Year celebration — one of the most spectacular in the valley. A towering chariot of Bhairava and Bhadrākālī is pulled through the old city by opposing teams representing different quarters. On New Year's Day, a massive lingam pole (yosiṃ) is raised with great ceremony and later lowered — this raising marks the year's beginning."),
        ("Bhaṭo Jātrā", "Javalakhel, Patan, Jyaiṣṭha (May–June)",
         "The culminating ceremony of Rato Matsyendranātha Jātrā — the sacred jewelled vest (bhaṭo) of Matsyendranātha is publicly displayed from the chariot. Tradition holds that the vest was found by a Nāga king and that displaying it maintains the valley's covenant with the serpent guardians of water."),
    ]
    for name, where, desc in jatras:
        flows.append(ColorRect(f"<b>{name}</b>   <i>{where}</i>",
                               ST["h3"], bg=colors.HexColor("#EEF2F8"), border_color=BLUE, pad_h=10, pad_v=4))
        flows.append(body(desc))
        flows.append(Spacer(1, 3*mm))

    flows += section_head("Public Holidays in Nepal")
    holidays = [
        ("Prithvi Jayantī",           "Pauṣa 27 (Jan 11)",     "Birthday of Prithvi Narayan Shah"),
        ("Martyr's Day",              "Māgha 5 (Jan 19/20)",    "Commemorating those who died for democracy"),
        ("Maghe Sankranti",           "Māgha 1 (Jan 15)",       "Winter solstice holy bathing"),
        ("Śivarātri",                 "Phālguna (Feb/Mar)",      "Śiva's night; Paśupatinātha pilgrimage"),
        ("Phāgu Pūrṇimā (Holi)",      "Phālguna (Feb/Mar)",     "Festival of colours"),
        ("Baladevi Caturtha",         "Caitra (Mar)",            "Newar festival"),
        ("Ghoḍe Jātrā / Pāḍavā",     "Caitra (Mar/Apr)",       "Horse festival; spring new year"),
        ("Rāma Navamī",               "Caitra (Mar/Apr)",        "Rāma's birthday"),
        ("Baisakh 1 — New Year",     "Baisakh (Apr 14/15)",   "Nepalī New Year"),
        ("Buda Jayantī",              "Vaiśākha (Apr/May)",      "Buddha's birth, enlightenment & death"),
        ("Janai Pūrṇimā (Rākṣā Bandhana)","Śrāvaṇa (Aug)",     "Sacred thread ceremony; Ṛṣi Pañcamī"),
        ("Gaī Jātrā",                 "Bhādra (Aug/Sep)",       "Cow procession for the recently deceased"),
        ("Kṛṣṇa Aṣṭamī",             "Bhādra (Aug/Sep)",       "Kṛṣṇa's birthday"),
        ("Indra Jātrā",               "Bhādra/Āśvina (Sep)",    "8-day festival; Kumārī chariot procession"),
        ("Ghatasthāpanā",             "Āśvina (Sep/Oct)",       "First day of Dashain — sacred water vessel"),
        ("Phūlapātī",                 "Āśvina 7th (Sep/Oct)",   "Seventh day of Dashain — flowers brought"),
        ("Vijayā Daśamī",             "Āśvina 10th (Sep/Oct)",  "Main Dashain day — tīkā from elders"),
        ("Lakṣmī Pūjā",               "Kārtika (Oct/Nov)",      "Third night of Tihar — goddess of wealth"),
        ("Bhāī Ṭīkā",                 "Kārtika (Oct/Nov)",      "Fifth day of Tihar — sister-brother bond"),
        ("Chhaṭha Pūjā",              "Kārtika (Oct/Nov)",      "Sun worship festival"),
        ("Constitution Day",          "Āśvina 3 (Sep 19/20)",   "Promulgation of 2015 constitution"),
        ("Republic Day",              "Jyaiṣṭha 15 (May/Jun)",  "Abolition of monarchy in 2008"),
    ]
    rows = [[Paragraph(c, ST["bold"]) for c in ["Holiday", "Date (approx.)", "Significance"]]]
    for h, d, s in holidays:
        rows.append([Paragraph(h,ST["bodyL"]), Paragraph(d,ST["bodyL"]), Paragraph(s,ST["bodyL"])])
    t = Table(rows, colWidths=[55*mm, 35*mm, 80*mm])
    t.setStyle(TableStyle([
        ("BACKGROUND",(0,0),(-1,0),BLUE),("TEXTCOLOR",(0,0),(-1,0),WHITE),
        ("ROWBACKGROUNDS",(0,1),(-1,-1),[WHITE,LGREY]),
        ("GRID",(0,0),(-1,-1),0.3,colors.HexColor("#CCC")),
        ("VALIGN",(0,0),(-1,-1),"TOP"),("TOPPADDING",(0,0),(-1,-1),3),
        ("BOTTOMPADDING",(0,0),(-1,-1),3),("LEFTPADDING",(0,0),(-1,-1),4),
    ]))
    flows += [t, Spacer(1, 5*mm)]

    flows += section_head("Jyotiṣa — Why Stars and Astrology Matter")
    flows.append(body(
        "<b>Jyotiṣa</b> (astrology / the science of light) is not a fringe interest in Nepal — "
        "it is a foundational institution governing the timing of all important events. "
        "A baby's name is determined by the birth-star (<i>nakṣatra</i>) in a ceremony "
        "called <b>Nwarān</b>. No wedding date is set without an astrologer confirming an "
        "auspicious alignment of the couple's horoscopes and the planetary positions. "
        "Before major state decisions, inaugurating a building, beginning a journey, "
        "or starting a business, a <i>muhūrta</i> (auspicious moment) is calculated."
    ))
    flows.append(Spacer(1, 2*mm))
    flows.append(body(
        "The Nepalī system uses <b>27 nakṣatras</b> (lunar mansions) — star-clusters through "
        "which the moon passes over its monthly cycle — and <b>9 grahas</b> (planets, including "
        "the sun, moon, and two shadow planets Rāhu and Ketu). Each nakṣatra carries "
        "qualities: some are auspicious for weddings, others for travel, others for buying "
        "land. The <i>pañcāṅga</i> (five-limbed almanac) published each year tells the "
        "nakṣatra, tithī (lunar day), yoga, karaṇa, and vara (weekday) for every day "
        "of the year, and is consulted in most traditional households daily."
    ))
    flows.append(Spacer(1, 2*mm))
    flows.append(body(
        "The <b>Grahī</b> system also governs birth charts read by Jyotiṣī (astrologers) "
        "who advise on career, health, relationship compatibility, and life purpose. "
        "In times of hardship, a <i>graha śānti pūjā</i> (planet-pacification ceremony) "
        "is performed to mitigate the malefic influence of a particular planet — "
        "for instance, Śanī (Saturn) is considered the most difficult graha, and "
        "Śanī's transit periods are met with specific fasts, offerings, and rituals."
    ))
    flows.append(Spacer(1, 3*mm))

    flows += section_head("Cultural Dances of Nepal")
    dances = [
        ("Tharu Dance","Terai (western lowlands)",
         "Performed by the Tharu indigenous people during harvest festivals and community celebrations. Varieties include the <i>Devi Dance</i>, the <i>Jhumra</i>, and the <i>Stick Dance (laṭhī nāca)</i>. Tharu dance is characterised by rapid footwork and group synchronisation, often performed around a central fire at night."),
        ("Deudā Dance","Far-west Nepal (Surkhet, Dadeldhura, Baitadi)",
         "A sung-dance performed in large circles, especially during Tīja and other hill festivals in the Karnali and Setī zones. Men and women hold hands or form lines; songs are improvised call-and-response, often poetic and witty. Deudā music uses the ḍholak drum and a distinctive pentatonic melody."),
        ("Mārunī Dance","Newar and hill communities; Tihar festival",
         "Performed during Tihar by troupes going house to house. Traditionally performed by men in women's clothing in graceful, delicate movements. The troupe includes musicians playing sāraṅgī, ḍhol, and flute. Mārunī is one of Nepal's most recognised folk dance forms."),
        ("Tamang Selo","Tamang community; hill districts around Kathmandu",
         "The signature music and dance of the Tamang people, played with the <i>damphu</i> frame drum. Tamang Selo songs tell of love, longing for home, and the hardships of migration. The accompanying dance is expressive and narrative, with the dancer becoming the story."),
        ("Cāṇḍī (Chandi) Dance","Bhaktapur's Nava Durgā festival",
         "A fierce ritual dance of the nine mother goddesses performed exclusively by initiated Newar dancers from specific castes in Bhaktapur's Nava Durgā tradition. Dancers wear elaborate masks representing Durgā and the Aṣṭa Mātr̥kās, performing a year-long cycle of performances that are simultaneously sacred ceremony and living mythology."),
        ("Lākhe Dance","Kathmandu; Indra Jātrā and other festivals",
         "The Lākhe is a former demon, tamed by the goddess, who now protects the city by driving away evil. The Lākhe dancer wears a terrifying mask with wild hair and fangs, a shaggy red-and-black costume, and heavy ankle bells. The dance is wild and improvised — the Lākhe charges at spectators (especially children) who scream and scatter with delight."),
        ("Ghāṭu Dance","Gurung community; spring festivals",
         "A ritualistic narrative dance performed only by young Gurung women, depicting the life and story of the goddess Ghāṭu. Performed during Caitra and Baisakh. Dancers must undergo a ritual preparation and enter a trance-like state. Ghāṭu is slowly being lost as Gurung communities modernise."),
        ("Rātyaulī Dance","Pan-Nepal; wedding celebrations",
         "Rātyaulī means 'the night before' — the all-night celebration before a wedding. Women gather, sing bawdy and tender songs about marriage, love, and in-law challenges, and dance through the night. Rātyaulī songs are some of the most poetic in folk Nepalī tradition and vary greatly by region and ethnicity."),
        ("Tīja Dance","Pan-Nepal (especially Pahāḍ communities); Tīja festival",
         "Women dress in red during the Tīja festival and dance in groups, singing devotional songs praising Śiva and Pārvatī. The dancing is joyful and communal — a rare public space for women's collective celebration and expression. Modern Tīja songs increasingly address social issues like domestic violence and women's rights."),
    ]
    for name, where, desc in dances:
        flows.append(ColorRect(f"<b>{name}</b>   <i>{where}</i>",
                               ST["h3"], bg=LGREY, border_color=GOLD, pad_h=10, pad_v=4))
        flows.append(body(desc))
        flows.append(Spacer(1, 3*mm))

    flows += section_head("Cultural Dos and Don'ts")
    dos = [
        "Greet with <b>Namaste</b> — palms together, slight bow. Works for all situations.",
        "<b>Remove shoes</b> before entering temples, homes, and monasteries — always.",
        "Dress <b>modestly at religious sites</b> — cover shoulders and knees. Sarongs are often available for hire at temple entrances.",
        "Walk <b>clockwise</b> around stupas, shrines, maṇi walls, and prayer wheels.",
        "<b>Ask permission</b> before photographing people, especially during rituals or in temples.",
        "Accept food and gifts with your <b>right hand or both hands</b> — never the left alone.",
        "Learn a few <b>Nepalī words</b> — even basic phrases will be met with genuine warmth.",
        "Carry a <b>reusable water bottle</b> to avoid contributing to plastic waste.",
        "Give way to <b>porters on narrow mountain trails</b> — they have the right of way.",
        "If invited for tea (<b>ciyā</b>) or a meal at a home, it is polite and meaningful to accept.",
    ]
    donts = [
        "Don't point the <b>soles of your feet</b> at people or sacred objects — the foot is considered the least sacred part of the body.",
        "Don't touch someone's <b>head</b> — it is the most sacred part of the body.",
        "Don't eat <b>beef</b> — the cow is the national animal and sacred. This is deeply felt, not merely a rule.",
        "Don't <b>step over</b> food, cooking utensils, religious objects, or people's outstretched legs.",
        "Don't enter the <b>inner sanctums of Hindu temples</b> marked 'Hindus only' — this includes Paśupatinātha's main temple.",
        "Don't <b>photograph cremation ghats</b> at Paśupatinātha without permission — funerals deserve privacy.",
        "Don't give <b>sweets, pens, or money directly to children</b> on the street — it reinforces organised begging.",
        "Don't <b>trek alone</b> in remote areas — register with TAAN (Trekking Agencies' Association of Nepal) and use a licensed guide.",
        "Don't use your <b>left hand</b> to eat or to pass things — the left is used for washing and is considered unclean.",
        "Don't show <b>excessive public affection</b> — holding hands is generally acceptable; kissing in public is not.",
        "Don't <b>haggle aggressively</b> — polite bargaining is expected at markets, but firmness with anger is rude.",
        "Don't disrespect the <b>Svastika</b> — it is an ancient sacred symbol (meaning 'all is well') in Nepal, unrelated to its 20th-century misappropriation in Europe.",
    ]
    flows += sub_head("✓ Dos")
    flows += bullet_table(dos, cols=1)
    flows += sub_head("✗ Don'ts")
    flows += bullet_table(donts, cols=1)
    return flows
