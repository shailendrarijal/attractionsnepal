#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Part 2: Cover, TOC, IAST guide, Introduction, History"""
from nepal_guide_part1 import *

def build_cover():
    path = IMG_DIR / "cover.jpg"
    flows = []
    # Blue gradient background achieved via stacked colour blocks
    flows.append(ColorRect("", ParagraphStyle("x"), bg=BLUE, pad_v=30))
    # If we have cover image, use it; otherwise pure colour cover
    flows.append(Spacer(1, 8*mm))
    if path.exists():
        flows.append(Image(str(path), width=170*mm, height=80*mm))
    flows += [
        Spacer(1, 10*mm),
        Paragraph("THE COMPLETE GUIDE TO", ST["coverSub"]),
        Paragraph("Nepāl", ST["coverTitle"]),
        Spacer(1, 4*mm),
        Paragraph("Culture · History · Trekking · Sacred Places · Food · Arts", ST["coverSub"]),
        Spacer(1, 6*mm),
        HRFlowable(width="60%", thickness=1, color=GOLD, spaceAfter=6),
        Paragraph("With IAST Transliteration Guide · 100 Essential Phrases", ST["coverMeta"]),
        Spacer(1, 4*mm),
        Paragraph("© AttractionsNepal.com — First Edition 2025", ST["coverMeta"]),
        PageBreak(),
    ]
    return flows

def build_toc():
    flows = [
        ColorRect("Table of Contents", ST["h1"], bg=DARK, pad_h=14, pad_v=10),
        Spacer(1, 6*mm),
    ]
    chapters = [
        ("1", "IAST Pronunciation Guide", "Understanding Nepālī in Roman script"),
        ("2", "Introduction to Nepāl",    "Location, geography, population, fun facts"),
        ("3", "Brief History",            "From Mañjuśrī's sword to the Republic"),
        ("4", "Geography & Six Seasons",  "Landscape, rivers, Himalayan zones"),
        ("5", "Culture",                  "Festivals, Jātras, dances, astrology, dos & don'ts"),
        ("6", "Food & Cuisine",           "Dāl Bhāṭa to 20+ cultural food traditions"),
        ("7", "Trekking Guide",           "Permits, gear, altitude, safety"),
        ("8", "Places to Visit",          "Top 10 lists: treks, temples, lakes, adventures…"),
        ("9", "Arts & Crafts",            "Thaṅkā, Maṇḍala, bronze, pottery, Pasminā"),
        ("10","Practical Information",    "Visa, currency, health, transport"),
        ("11","100 Essential Phrases",    "Greetings to emergencies in IAST Nepālī"),
    ]
    for num, ch, desc in chapters:
        flows.append(Paragraph(f"Chapter {num} — <b>{ch}</b>", ST["tocCh"]))
        flows.append(Paragraph(desc, ST["tocEntry"]))
    flows.append(PageBreak())
    return flows

def build_iast():
    flows = chapter_header(
        "Chapter 1: IAST Pronunciation Guide",
        "International Alphabet of Sanskrit Transliteration — reading Nepālī in Roman script"
    )
    flows.append(body(
        "This guide uses <b>IAST</b> (International Alphabet of Sanskrit Transliteration), the "
        "scholarly standard for rendering Sanskrit and Nepālī in Roman letters. A single diacritic "
        "changes meaning entirely — the most important example for visitors:"
    ))
    flows.append(Spacer(1, 3*mm))
    # Critical distinction table
    crit = [
        [Paragraph("IAST Spelling", ST["bold"]), Paragraph("Pronunciation", ST["bold"]), Paragraph("Meaning", ST["bold"])],
        [Paragraph("Kālī", ST["phrase_np"]),  Paragraph("Kaa-lee (long ā)", ST["bodyL"]), Paragraph("The Goddess of Time and Transformation — Śiva's consort, revered destroyer of evil", ST["bodyL"])],
        [Paragraph("kali", ST["phrase_np"]),  Paragraph("kuh-li (short a)", ST["bodyL"]), Paragraph("The demon of discord; also Kali Yuga, the current dark age", ST["bodyL"])],
        [Paragraph("Rāma", ST["phrase_np"]),  Paragraph("Raa-ma (long ā)", ST["bodyL"]), Paragraph("The divine hero-king, seventh avatar of Viṣṇu", ST["bodyL"])],
        [Paragraph("Svayambhū", ST["phrase_np"]),Paragraph("Swa-yam-bhoo", ST["bodyL"]), Paragraph("'Self-arisen' — the eternal flame that preceded the universe", ST["bodyL"])],
        [Paragraph("Pṛthvī", ST["phrase_np"]), Paragraph("Prit-hwee", ST["bodyL"]),     Paragraph("Earth goddess; also name of king Pṛthvī Nārāyaṇa Śāha", ST["bodyL"])],
        [Paragraph("Nepāl", ST["phrase_np"]),  Paragraph("Ne-paal (long ā)", ST["bodyL"]),Paragraph("The country (long ā is the correct pronunciation)", ST["bodyL"])],
    ]
    t = Table(crit, colWidths=[30*mm, 45*mm, 95*mm])
    t.setStyle(TableStyle([
        ("BACKGROUND",(0,0),(-1,0), RED), ("TEXTCOLOR",(0,0),(-1,0), WHITE),
        ("ROWBACKGROUNDS",(0,1),(-1,-1),[WHITE, colors.HexColor("#FDF0EE")]),
        ("GRID",(0,0),(-1,-1),0.3,colors.HexColor("#CCC")),
        ("VALIGN",(0,0),(-1,-1),"TOP"),
        ("TOPPADDING",(0,0),(-1,-1),4),("BOTTOMPADDING",(0,0),(-1,-1),4),
        ("LEFTPADDING",(0,0),(-1,-1),5),
    ]))
    flows += [t, Spacer(1, 5*mm)]

    flows += section_head("Vowel Chart")
    vowels = [
        ["a", "short a","as in s<u>u</u>n or <u>a</u>bout","pati (lord)"],
        ["ā", "long ā","as in f<u>a</u>ther","Śiva's consort Pārvatī"],
        ["i", "short i","as in s<u>i</u>t","girī (mountain)"],
        ["ī", "long ī","as in s<u>ee</u>","Pṛthvī (earth)"],
        ["u", "short u","as in p<u>u</u>t","guru"],
        ["ū", "long ū","as in m<u>oo</u>n","Svayambhū"],
        ["ṛ", "vocalic r","like 'ri' quickly","Pṛthvī"],
        ["e", "e","as in th<u>ey</u>","Devī (goddess)"],
        ["o", "o","as in g<u>o</u>","Gaṇeśa"],
        ["ai","ai","as in <u>eye</u>","Kailāsa"],
        ["au","au","as in <u>ow</u>l","Gauri"],
        ["ṃ","anusvāra","nasal, like 'ng'","Saṃskṛta"],
        ["ḥ","visarga","light 'h' breath after vowel","Namaḥ"],
    ]
    vrows = [[Paragraph(c, ST["bold"]) for c in ["IAST","Name","Pronunciation","Example"]]]
    for row in vowels:
        vrows.append([Paragraph(row[0], ST["phrase_np"]),
                      Paragraph(row[1], ST["bodyL"]),
                      Paragraph(row[2], ST["bodyL"]),
                      Paragraph(row[3], ST["bodyL"])])
    vt = Table(vrows, colWidths=[14*mm, 28*mm, 70*mm, 58*mm])
    vt.setStyle(TableStyle([
        ("BACKGROUND",(0,0),(-1,0),BLUE),("TEXTCOLOR",(0,0),(-1,0),WHITE),
        ("ROWBACKGROUNDS",(0,1),(-1,-1),[WHITE,LGREY]),
        ("GRID",(0,0),(-1,-1),0.3,colors.HexColor("#CCC")),
        ("VALIGN",(0,0),(-1,-1),"TOP"),("TOPPADDING",(0,0),(-1,-1),3),
        ("BOTTOMPADDING",(0,0),(-1,-1),3),("LEFTPADDING",(0,0),(-1,-1),4),
    ]))
    flows += [vt, Spacer(1, 5*mm)]

    flows += section_head("Key Consonant Distinctions")
    flows.append(body(
        "The most important distinctions are <b>dental</b> vs <b>retroflex</b> consonants, "
        "and <b>aspirated</b> vs <b>unaspirated</b>. Retroflexes (with underdot: ṭ ḍ ṇ ṣ) "
        "are pronounced with the tongue curled back to touch the roof of the mouth."
    ))
    flows.append(Spacer(1, 2*mm))
    cons = [
        ["t / ṭ","t = dental (tongue on teeth, Italian-style)\nṭ = retroflex (tongue curled back)",   "Kāṭhmāṇḍu uses ṭ and ṇ"],
        ["d / ḍ","d = dental  |  ḍ = retroflex",                                                     "Ḍhaka cloth (with ḍh aspirate)"],
        ["n / ṇ","n = dental  |  ṇ = retroflex nasal",                                               "Kāṭhmāṇḍu (ṇ in final syllable)"],
        ["s / ś / ṣ","s = dental sibilant\nś = palatal (like 'sh' in ship)\nṣ = retroflex sibilant", "Śiva = SHIVA\nViṣṇu = VISHNU"],
        ["th / dh / bh","Aspirated stops — NOT like English 'th'\nth = t + puff of air\nbh = b + puff of air", "Bhaktapur, Dharahārā, Thāmel"],
        ["c / ch","c = 'ch' as in church\nch = aspirated 'ch'","Caitra, Chatāmārī"],
        ["ph","p + puff of air (NOT 'f')", "Phewa Lake = P-hewa, not Fewa"],
    ]
    crows = [[Paragraph(c, ST["bold"]) for c in ["Character","Pronunciation","Nepal Example"]]]
    for row in cons:
        crows.append([Paragraph(row[0],ST["phrase_np"]),
                      Paragraph(row[1].replace("\n","<br/>"),ST["bodyL"]),
                      Paragraph(row[2],ST["bodyL"])])
    ct = Table(crows, colWidths=[22*mm, 80*mm, 68*mm])
    ct.setStyle(TableStyle([
        ("BACKGROUND",(0,0),(-1,0),BLUE),("TEXTCOLOR",(0,0),(-1,0),WHITE),
        ("ROWBACKGROUNDS",(0,1),(-1,-1),[WHITE,LGREY]),
        ("GRID",(0,0),(-1,-1),0.3,colors.HexColor("#CCC")),
        ("VALIGN",(0,0),(-1,-1),"TOP"),("TOPPADDING",(0,0),(-1,-1),4),
        ("BOTTOMPADDING",(0,0),(-1,-1),4),("LEFTPADDING",(0,0),(-1,-1),4),
    ]))
    flows += [ct, Spacer(1, 4*mm)]
    flows.append(ColorRect(
        "Throughout this guide every Nepālī, Sanskrit, and Hindi word is written in IAST. "
        "The first occurrence of each term also shows its common English spelling in parentheses. "
        "Long vowels matter — take a moment to learn ā, ī, ū and you will pronounce Nepal's "
        "sacred names with genuine respect.",
        ST["italic"], bg=colors.HexColor("#FFF8F0"), border_color=GOLD, pad_h=12, pad_v=8
    ))
    return flows

def build_intro():
    flows = chapter_header(
        "Chapter 2: Introduction to Nepāl",
        "A Himalayan kingdom between giants — birthplace of the Buddha, home of Everest"
    )
    flows += img("mountains", caption="The Great Himālaya — eight of the world's ten highest peaks lie within Nepāl")

    flows += section_head("At a Glance")
    facts = [
        ["Official Name",    "Federal Democratic Republic of Nepāl"],
        ["Capital",          "Kāṭhmāṇḍu (Kathmandu) — 1,400 m above sea level"],
        ["Population",       "Approx. 30 million (2024 estimate)"],
        ["Area",             "147,181 km² — roughly the size of England & Wales"],
        ["Location",         "South Asia, landlocked between India (south/east/west) and China–Tibet (north)"],
        ["Official Language","Nepālī (written in Devanāgarī script)"],
        ["Other Languages",  "125+ officially recognised languages"],
        ["Religion",         "Primarily Hindu (81 %), Buddhist (9 %), plus Muslim, Kirant, Christian minorities"],
        ["Currency",         "Nepālese Rupee (NPR); 1 USD ≈ 133 NPR (2024)"],
        ["Time Zone",        "UTC +5:45 (the only ¾-hour offset in the world)"],
        ["Calendar",         "Bikram Saṃvat (BS) — 56–57 years ahead of the Gregorian calendar"],
        ["Highest Point",    "Sagarmāthā (Everest) 8,848.86 m — Earth's highest peak"],
        ["Lowest Point",     "Kechana Kalan, Jhāpā — 70 m above sea level"],
        ["Government",       "Federal parliamentary republic; President is head of state"],
    ]
    rows = [[Paragraph(k, ST["bold"]), Paragraph(v, ST["bodyL"])] for k, v in facts]
    t = Table(rows, colWidths=[48*mm, 122*mm])
    t.setStyle(TableStyle([
        ("ROWBACKGROUNDS",(0,0),(-1,-1),[WHITE,LGREY]),
        ("GRID",(0,0),(-1,-1),0.3,colors.HexColor("#CCC")),
        ("VALIGN",(0,0),(-1,-1),"TOP"),
        ("TOPPADDING",(0,0),(-1,-1),4),("BOTTOMPADDING",(0,0),(-1,-1),4),
        ("LEFTPADDING",(0,0),(-1,-1),5),
    ]))
    flows += [t, Spacer(1, 5*mm)]

    flows += section_head("10 Remarkable Facts About Nepāl")
    fun_facts = [
        "<b>The world's only non-rectangular national flag.</b> Nepāl's flag is a double pennon — two stacked triangular shapes. Every other national flag in the world is a rectangle.",
        "<b>Eight of the ten highest peaks</b> on Earth are in Nepāl, including Sagarmāthā (Everest, 8,848 m), Kangcenjuṅgā (8,586 m), Lotse (8,516 m), and Makālu (8,463 m).",
        "<b>Birthplace of the Buddha.</b> Siddhārtha Gautama was born in Lumbinī, Nepāl, c. 563 BCE. Lumbinī is a UNESCO World Heritage Site and one of the holiest places on earth.",
        "<b>The cow is the national animal</b> and is sacred throughout Nepāl. Slaughtering a cow was historically punishable by law. Beef is not served in traditional Nepālī restaurants.",
        "<b>Nepāl was never colonised.</b> While neighbouring India, Burma, and Tibet fell under British or Chinese control, Nepāl maintained its sovereignty — a source of enormous national pride.",
        "<b>Time zone: UTC +5:45.</b> Nepāl is the only country in the world with a ¾-hour offset, set partly to distinguish itself from India (UTC +5:30).",
        "<b>The Bikram Saṃvat calendar</b> used in Nepāl runs 56–57 years ahead of the Gregorian. The Nepālese New Year (Baiśākha 1) falls in mid-April. The year 2025 CE is BS 2082.",
        "<b>More than 240 peaks over 6,000 m.</b> Nepāl's topography spans 70 m (Terai lowlands) to 8,849 m in a horizontal distance of barely 200 km — one of Earth's steepest gradients.",
        "<b>Pashupatinātha</b> in Kāṭhmāṇḍu is considered the most sacred Śiva temple in the world. Non-Hindus are not permitted inside the inner sanctum.",
        "<b>The Gurkhas</b> — soldiers from Nepāl's hill communities — have served in the British and Indian armies for over 200 years. Their motto: <i>Kaparnu bhanda marnu rāmro</i> — 'Better to die than live a coward.'",
    ]
    for i, ff in enumerate(fun_facts, 1):
        flows.append(Paragraph(f"<b>{i}.</b>  {ff}", ST["body"]))
        flows.append(Spacer(1, 2*mm))
    return flows

def build_history():
    flows = chapter_header(
        "Chapter 3: Brief History of Nepāl",
        "From the primordial lotus-lake to the federal republic"
    )
    flows += img("swayambhu", caption="Svayambhunātha Stūpa — built over the hill where the eternal flame arose from the drained lake")

    flows += section_head("The Valley Before the Valley — Mañjuśrī and Svayambhū")
    flows.append(body(
        "According to the <b>Svayambhū Purāṇa</b>, Nepāl's oldest sacred text, the Kāṭhmāṇḍu "
        "Valley was once a vast lake called <b>Nāgadaha</b> — the Lake of Serpents. Aeons ago, "
        "a miraculous lotus rose from its centre bearing a self-arising flame called "
        "<b>Svayambhū</b> ('self-existent one'), the visible presence of primordial consciousness "
        "itself. Pilgrims came from across the world to pay homage, but the lake made the "
        "flame inaccessible to most."
    ))
    flows.append(Spacer(1, 2*mm))
    flows.append(body(
        "The bodhisattva <b>Mañjuśrī</b> — embodiment of divine wisdom, depicted holding a "
        "flaming sword that cuts through ignorance — journeyed from his abode on Pañcaśīrṣa "
        "mountain (identified with Wutai Shan in China) to drain the lake so all beings could "
        "reach the flame. With one stroke of his <b>Candrahrāsa sword</b> (the moon-bright blade) "
        "at the valley's southern rim, he cut through <b>Cobhāra Gorge (Chobar)</b>, and the "
        "lake drained. The valley floor emerged — fertile, sheltered by forested ridges, "
        "threaded by the rivers Bāgmatī, Viṣṇumatī, and Manahārā."
    ))
    flows.append(Spacer(1, 2*mm))
    flows.append(body(
        "The hill that once bore the lotus now stood on dry ground. On it was built the great "
        "<b>Svayambhunātha Stūpa</b>, encasing the eternal flame. The Nāga king Karkoṭaka, "
        "left without a lake, was promised that the valley's people would always honour the "
        "serpents — a covenant maintained through the festival of <b>Nāga Pañcamī</b> to this day."
    ))
    flows.append(Spacer(1, 3*mm))

    flows += section_head("The Licchavī and Malla Eras (c. 400–1768 CE)")
    flows.append(body(
        "The valley's recorded history begins with the <b>Licchavī dynasty</b> (c. 400–750 CE), "
        "under whose patronage Nepāl's greatest stone sculptures were carved — many still "
        "standing at <b>Chaṅgu Nārāyaṇa</b>, the valley's oldest surviving temple. The Licchavī "
        "era established the tradition of religious pluralism: Hindu and Buddhist shrines "
        "shared the same sacred landscape."
    ))
    flows.append(Spacer(1, 2*mm))
    flows.append(body(
        "The <b>Malla dynasty</b> (c. 1200–1769 CE) presided over Nepāl's golden age of art and "
        "architecture. The three medieval city-states — <b>Kāṭhmāṇḍu, Lalitapur (Pāṭan), and "
        "Bhaktapur (Bhadgāon)</b> — competed to build the finest temples, palaces, and "
        "courtyards. The Durbar Squares of all three cities, now UNESCO World Heritage Sites, "
        "are the legacy of Malla patronage. Newār craftsmen developed their distinctive "
        "styles of bronze casting, woodcarving, and manuscript illumination."
    ))
    flows.append(Spacer(1, 3*mm))

    flows += section_head("Unification by Pṛthvī Nārāyaṇa Śāha (1743–1769)")
    flows += img("kathmandu", caption="Kāṭhmāṇḍu Durbar Square — built under Malla patronage, conquered by Pṛthvī Nārāyaṇa Śāha in 1769")
    flows.append(body(
        "<b>Pṛthvī Nārāyaṇa Śāha</b>, king of the small hill kingdom of Gorkhā, began his "
        "campaign to unify the fragmented kingdoms of the Himalayan region at age 20. He "
        "described Nepāl as a <i>yam between two boulders</i> — pressed between the expanding "
        "British East India Company to the south and the Qing Chinese empire to the north — "
        "and believed that only a unified, independent Nepāl could survive."
    ))
    flows.append(Spacer(1, 2*mm))
    flows.append(body(
        "After 25 years of patient military and diplomatic campaigning — sieges of Kirtipur, "
        "alliances with hill chieftains, careful avoidance of British entanglement — Pṛthvī "
        "Nārāyaṇa Śāha captured all three Malla city-states in <b>1769</b>, famously entering "
        "Kāṭhmāṇḍu during the Indra Jātrā festival. He made Kāṭhmāṇḍu his capital and "
        "declared Nepāl a unified nation. He is revered as the father of modern Nepāl; his "
        "birthday (<i>Pṛthvī Jayantī</i>) is a national holiday observed on Pauṣa 27."
    ))
    flows.append(Spacer(1, 3*mm))

    flows += section_head("Expansion, the Anglo-Nepāla War, and the Sugaulī Treaty (1814–1816)")
    flows.append(body(
        "Under Pṛthvī Nārāyaṇa Śāha's successors, Gorkhā expansion continued aggressively "
        "east and west, eventually stretching from <b>Tistā (present-day West Bengal) to the "
        "Sutlej (Himāchal Pradesh)</b> — a territory roughly three times the size of modern Nepāl. "
        "This brought Nepāl into inevitable collision with British India."
    ))
    flows.append(Spacer(1, 2*mm))
    flows.append(body(
        "The <b>Anglo-Nepāla War (1814–1816)</b> — called the <i>Gurkha War</i> in British records — "
        "was bitterly fought across the Himalayan foothills. British forces suffered unexpected "
        "losses to Gorkhā infantry in the early campaigns; the commander General Gillespie was "
        "killed at Kalunga (Nalapani). But British resources ultimately prevailed, and the "
        "<b>Sugaulī Treaty (1816)</b> ceded to Britain the territories of Sikkim, Darjeeling, "
        "Garhwāl, Kumaon, and the Terai lowlands — reducing Nepāl to roughly its present borders. "
        "Crucially, Nepāl retained its sovereignty and was never formally colonised."
    ))
    flows.append(Spacer(1, 2*mm))
    flows.append(body(
        "As a consequence of the war, British India began recruiting Gorkhā soldiers — men "
        "whose fighting qualities had deeply impressed British commanders. This began the "
        "legendary <b>Gurkha regiments</b>, still serving in the British and Indian armies today."
    ))
    flows.append(Spacer(1, 3*mm))

    flows += section_head("The Rāṇā Oligarchy (1846–1951)")
    flows.append(body(
        "In 1846, Prime Minister <b>Juṅga Bahādura Rāṇā</b> seized power in a palace massacre "
        "(<i>Kot Massacre</i>), reduced the Śāha kings to figureheads, and made the office of "
        "prime minister hereditary in his family. The Rāṇā oligarchy ruled Nepāl for 104 years "
        "as an isolated, feudal state — deliberately limiting education, infrastructure, and "
        "outside contact to preserve their power. The British recognised the arrangement in "
        "exchange for Gurkha recruitment rights."
    ))
    flows.append(Spacer(1, 2*mm))
    flows.append(body(
        "In 1951, King <b>Tribhuvana Bīra Bikrama Śāha</b> escaped to India and, with Indian "
        "support and a popular uprising, ended Rāṇā rule. A parliamentary democracy was "
        "established, though the king retained significant power."
    ))
    flows.append(Spacer(1, 3*mm))

    flows += section_head("Democracy, Royal Rule, and the Road to the Republic (1951–2008)")
    flows.append(body(
        "Nepāl's post-Rāṇā democracy was unstable. In 1960, King <b>Mahendra Bīra Bikrama Śāha</b> "
        "dismissed the elected government and introduced the <i>Pañcāyata</i> system — a "
        "party-less, king-centred government. In <b>1990</b>, a mass people's movement "
        "(<i>Jana Āndolan I</i>) forced the restoration of multiparty democracy and a new "
        "constitution limiting royal power."
    ))
    flows.append(Spacer(1, 2*mm))
    flows.append(body(
        "On <b>June 1, 2001</b>, Crown Prince <b>Dīpendra Bīra Bikrama Śāha</b> shot dead nine "
        "members of the royal family including King <b>Bīrendra</b> and Queen <b>Aiśvaryā</b> "
        "during a family dinner at Nārāyaṇhiṭī Palace, then turned the gun on himself. He "
        "died three days later, briefly becoming king while unconscious. The Royal Massacre "
        "shocked Nepāl and the world, and deeply damaged the institution of the monarchy."
    ))
    flows.append(Spacer(1, 2*mm))
    flows.append(body(
        "Amid a Maoist insurgency (1996–2006) and the new king <b>Gyānendra</b>'s increasingly "
        "authoritarian rule, a second people's movement (<i>Jana Āndolan II</i>) in 2006 forced "
        "the king to restore parliament. In <b>2008</b>, a Constituent Assembly abolished the "
        "monarchy, declared Nepāl a federal democratic republic, and elected a president. "
        "After years of political deadlock, a <b>new constitution</b> was promulgated on "
        "September 20, <b>2015</b> — the same year a catastrophic 7.8-magnitude earthquake "
        "killed nearly 9,000 people and destroyed thousands of historic monuments. "
        "The constitution established seven federal provinces and enshrined fundamental rights."
    ))
    return flows
