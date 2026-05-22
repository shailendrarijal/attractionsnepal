#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Complete Nepal Tourist Guide — Part 1: Setup, styles, helpers"""

import os, sys
from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_JUSTIFY
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    Image, PageBreak, HRFlowable, KeepTogether
)
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus.flowables import Flowable

FONT_DIR   = Path("/tmp/nepal_guide_assets/fonts")
IMG_DIR    = Path("/tmp/nepal_guide_assets/images")
OUT_PATH   = Path("/Users/shailendra/Nashtech/Clients/New attractions nepal/backend/digitalProducts/pdf/complete-nepal-tourist-guide.pdf")
COVER_SRC  = Path(__file__).parent / "images" / "cover_image.png"
OUT_PATH.parent.mkdir(parents=True, exist_ok=True)

# ── Register fonts ────────────────────────────────────────────────────────────
pdfmetrics.registerFont(TTFont("NotoSerif",       str(FONT_DIR/"NotoSerif-Regular.ttf")))
pdfmetrics.registerFont(TTFont("NotoSerif-Bold",  str(FONT_DIR/"NotoSerif-Bold.ttf")))
pdfmetrics.registerFont(TTFont("NotoSerif-Italic",str(FONT_DIR/"NotoSerif-Italic.ttf")))
pdfmetrics.registerFont(TTFont("NotoSerif-BI",    str(FONT_DIR/"NotoSerif-BoldItalic.ttf")))
pdfmetrics.registerFontFamily("NotoSerif",
    normal="NotoSerif", bold="NotoSerif-Bold",
    italic="NotoSerif-Italic", boldItalic="NotoSerif-BI")

# ── Colours ───────────────────────────────────────────────────────────────────
RED    = colors.HexColor("#9B1C1C")
BLUE   = colors.HexColor("#003893")
GOLD   = colors.HexColor("#B8860B")
CREAM  = colors.HexColor("#FAF7F2")
DARK   = colors.HexColor("#1C1C2E")
LGREY  = colors.HexColor("#F0ECE4")
WHITE  = colors.white
BLACK  = colors.black

# ── Styles ────────────────────────────────────────────────────────────────────
def make_styles():
    S = {}
    base = dict(textColor=DARK, spaceAfter=6)

    S["body"]      = ParagraphStyle("body",      fontName="NotoSerif",        **base, fontSize=10, spaceBefore=2, leading=15, alignment=TA_JUSTIFY)
    S["bodyL"]     = ParagraphStyle("bodyL",     fontName="NotoSerif",        **base, fontSize=10, spaceBefore=2, leading=15, alignment=TA_LEFT)
    S["small"]     = ParagraphStyle("small",     fontName="NotoSerif",        **base, fontSize=8.5, leading=12)
    S["italic"]    = ParagraphStyle("italic",    fontName="NotoSerif-Italic", **base, fontSize=10, leading=15)
    S["bold"]      = ParagraphStyle("bold",      fontName="NotoSerif-Bold",   **base, fontSize=10, leading=14)
    S["h1"]        = ParagraphStyle("h1",        fontName="NotoSerif-Bold", fontSize=22, textColor=WHITE,
                                    leading=28, spaceAfter=4, spaceBefore=0, alignment=TA_LEFT)
    S["h2"]        = ParagraphStyle("h2",        fontName="NotoSerif-Bold", fontSize=15, textColor=RED,
                                    leading=20, spaceAfter=4, spaceBefore=12)
    S["h3"]        = ParagraphStyle("h3",        fontName="NotoSerif-Bold", fontSize=12, textColor=BLUE,
                                    leading=16, spaceAfter=3, spaceBefore=8)
    S["h4"]        = ParagraphStyle("h4",        fontName="NotoSerif-Bold", fontSize=10.5, textColor=DARK,
                                    leading=14, spaceAfter=2, spaceBefore=6)
    S["caption"]   = ParagraphStyle("caption",   fontName="NotoSerif-Italic", fontSize=8, textColor=colors.HexColor("#555"),
                                    leading=11, spaceAfter=8, alignment=TA_CENTER)
    S["coverTitle"]= ParagraphStyle("coverTitle",fontName="NotoSerif-Bold", fontSize=38, textColor=WHITE,
                                    leading=44, spaceAfter=8, alignment=TA_CENTER)
    S["coverSub"]  = ParagraphStyle("coverSub",  fontName="NotoSerif-Italic", fontSize=16, textColor=colors.HexColor("#FFD9A0"),
                                    leading=22, spaceAfter=6, alignment=TA_CENTER)
    S["coverMeta"] = ParagraphStyle("coverMeta", fontName="NotoSerif", fontSize=10, textColor=colors.HexColor("#E8D5B0"),
                                    leading=14, alignment=TA_CENTER)
    S["tocEntry"]  = ParagraphStyle("tocEntry",  fontName="NotoSerif", fontSize=10.5, textColor=DARK,
                                    leading=16, spaceAfter=3)
    S["tocCh"]     = ParagraphStyle("tocCh",     fontName="NotoSerif-Bold", fontSize=12, textColor=RED,
                                    leading=17, spaceAfter=2, spaceBefore=8)
    S["phrase_en"] = ParagraphStyle("phrase_en", fontName="NotoSerif-Bold",  fontSize=9,  textColor=DARK,   leading=12)
    S["phrase_np"] = ParagraphStyle("phrase_np", fontName="NotoSerif-Italic",fontSize=9,  textColor=BLUE,   leading=12)
    S["phrase_ph"] = ParagraphStyle("phrase_ph", fontName="NotoSerif",       fontSize=8.5,textColor=colors.HexColor("#555"), leading=12)
    # Sub-heading bar style with dark text — used for entries inside chapters (seasons, festivals, dances, etc.)
    S["h3_bar"]    = ParagraphStyle("h3_bar",    fontName="NotoSerif-Bold",   fontSize=11.5, textColor=DARK,
                                    leading=16, spaceAfter=0, spaceBefore=0)
    # White-text bold for use in table header cells (TableStyle TEXTCOLOR is ignored for Paragraphs)
    S["bold_white"]= ParagraphStyle("bold_white",fontName="NotoSerif-Bold",   fontSize=10, textColor=WHITE,
                                    leading=14, spaceAfter=0, spaceBefore=0)
    # Introduction page styles
    S["stat_cell"] = ParagraphStyle("stat_cell", fontName="NotoSerif-Bold",   fontSize=9,  textColor=WHITE,
                                    leading=20, alignment=TA_CENTER, spaceAfter=0, spaceBefore=0)
    S["intro_key"] = ParagraphStyle("intro_key", fontName="NotoSerif-Bold",   fontSize=9.5,textColor=BLUE,
                                    leading=13, spaceAfter=0, spaceBefore=0)
    S["fact_badge"]= ParagraphStyle("fact_badge",fontName="NotoSerif-Bold",   fontSize=17, textColor=WHITE,
                                    leading=21, alignment=TA_CENTER, spaceAfter=0, spaceBefore=0)
    S["fact_body"] = ParagraphStyle("fact_body", fontName="NotoSerif",        fontSize=9,  textColor=DARK,
                                    leading=13, spaceAfter=0, spaceBefore=0)
    return S

ST = make_styles()

# ── Helper flowables ──────────────────────────────────────────────────────────
class ColorRect(Flowable):
    """Full-width coloured bar with optional left-border accent."""
    def __init__(self, text, style, bg=None, pad_h=8, pad_v=6, border_color=None):
        super().__init__()
        self.text = text
        self.style = style
        self.bg = bg or BLUE
        self.pad_h = pad_h
        self.pad_v = pad_v
        self.border_color = border_color
        self._h = None

    def wrap(self, aw, ah):
        self._aw = aw
        p = Paragraph(self.text, self.style)
        _, h = p.wrap(aw - 2*self.pad_h - (5 if self.border_color else 0), ah)
        self._h = h + 2*self.pad_v
        return aw, self._h

    def draw(self):
        c = self.canv
        c.setFillColor(self.bg)
        c.rect(0, 0, self._aw, self._h, fill=1, stroke=0)
        if self.border_color:
            c.setFillColor(self.border_color)
            c.rect(0, 0, 5, self._h, fill=1, stroke=0)
        p = Paragraph(self.text, self.style)
        ox = self.pad_h + (5 if self.border_color else 0)
        p.wrap(self._aw - 2*self.pad_h - (5 if self.border_color else 0), self._h)
        p.drawOn(c, ox, self.pad_v)

def chapter_header(title, subtitle=None):
    """Red bar chapter header."""
    flows = [PageBreak(),
             ColorRect(title, ST["h1"], bg=RED, pad_h=14, pad_v=10)]
    if subtitle:
        flows.append(ColorRect(subtitle, ST["italic"], bg=colors.HexColor("#F5EDE4"),
                               border_color=RED, pad_h=14, pad_v=8))
    flows.append(Spacer(1, 6*mm))
    return flows

def section_head(text):
    return [ColorRect(text, ST["h2"], bg=LGREY, border_color=BLUE, pad_h=10, pad_v=5),
            Spacer(1, 3*mm)]

def sub_head(text):
    return [Paragraph(text, ST["h3"]), Spacer(1, 1*mm)]

def body(text):
    return Paragraph(text, ST["body"])

def img(name, width=170*mm, caption=None):
    path = IMG_DIR / f"{name}.jpg"
    if not path.exists():
        return []
    flows = [Image(str(path), width=width, height=width*0.45)]
    if caption:
        flows.append(Paragraph(caption, ST["caption"]))
    flows.append(Spacer(1, 3*mm))
    return flows

def bullet_table(items, cols=2):
    """Render a list of strings as a bullet table."""
    rows, row = [], []
    for i, item in enumerate(items):
        row.append(Paragraph(f"• {item}", ST["bodyL"]))
        if len(row) == cols:
            rows.append(row); row = []
    if row:
        while len(row) < cols: row.append(Paragraph("", ST["bodyL"]))
        rows.append(row)
    if not rows:
        return []
    col_w = 170*mm / cols
    t = Table(rows, colWidths=[col_w]*cols)
    t.setStyle(TableStyle([
        ("VALIGN",(0,0),(-1,-1),"TOP"),
        ("LEFTPADDING",(0,0),(-1,-1),4),
        ("RIGHTPADDING",(0,0),(-1,-1),4),
        ("TOPPADDING",(0,0),(-1,-1),2),
        ("BOTTOMPADDING",(0,0),(-1,-1),2),
    ]))
    return [t, Spacer(1, 2*mm)]

def top10_table(title, rows_data):
    """Render a numbered top-10 table with description column."""
    header = [Paragraph("#", ST["bold_white"]),
              Paragraph("Name", ST["bold_white"]),
              Paragraph("Notes", ST["bold_white"])]
    rows = [header]
    for i, (name, notes) in enumerate(rows_data, 1):
        rows.append([
            Paragraph(str(i), ST["bodyL"]),
            Paragraph(name, ST["bold"]),
            Paragraph(notes, ST["bodyL"]),
        ])
    t = Table(rows, colWidths=[8*mm, 52*mm, 110*mm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0,0), (-1,0), BLUE),
        ("TEXTCOLOR",  (0,0), (-1,0), WHITE),
        ("ROWBACKGROUNDS", (0,1), (-1,-1), [WHITE, colors.HexColor("#F4F0EB")]),
        ("GRID",       (0,0), (-1,-1), 0.3, colors.HexColor("#CCCCCC")),
        ("VALIGN",(0,0),(-1,-1), "TOP"),
        ("TOPPADDING",(0,0),(-1,-1), 4),
        ("BOTTOMPADDING",(0,0),(-1,-1),4),
        ("LEFTPADDING",(0,0),(-1,-1),5),
    ]))
    return section_head(title) + [t, Spacer(1, 4*mm)]

def phrase_table(phrases):
    """Render phrases: [(English, IAST Nepali, Phonetic)]"""
    rows = [[Paragraph("English", ST["bold_white"]),
             Paragraph("Nepālī (IAST)", ST["bold_white"]),
             Paragraph("Phonetic Guide", ST["bold_white"])]]
    for en, np_iast, ph in phrases:
        rows.append([Paragraph(en, ST["phrase_en"]),
                     Paragraph(np_iast, ST["phrase_np"]),
                     Paragraph(ph, ST["phrase_ph"])])
    t = Table(rows, colWidths=[52*mm, 68*mm, 50*mm])
    t.setStyle(TableStyle([
        ("BACKGROUND",   (0,0),(-1,0), BLUE),
        ("TEXTCOLOR",    (0,0),(-1,0), WHITE),
        ("ROWBACKGROUNDS",(0,1),(-1,-1),[WHITE, colors.HexColor("#EEF2F8")]),
        ("GRID",         (0,0),(-1,-1), 0.3, colors.HexColor("#BBBBBB")),
        ("VALIGN",(0,0),(-1,-1),"TOP"),
        ("TOPPADDING",(0,0),(-1,-1),3),
        ("BOTTOMPADDING",(0,0),(-1,-1),3),
        ("LEFTPADDING",(0,0),(-1,-1),4),
    ]))
    return [t, Spacer(1, 3*mm)]
