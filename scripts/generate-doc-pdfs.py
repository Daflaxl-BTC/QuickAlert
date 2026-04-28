"""Generate EU Declarations of Conformity for QuickAlert BASE and PRO.

Each DoC is a single-page A4 PDF in German + English (bilingual), styled to be
audit-ready. References the actual test reports archived in /public.
"""

from datetime import date
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)

OUT_DIR = Path(__file__).resolve().parent.parent / "public" / "compliance"
OUT_DIR.mkdir(parents=True, exist_ok=True)

ISSUE_DATE = date.today().strftime("%d.%m.%Y")
ISSUE_PLACE = "München, Deutschland"

MANUFACTURER_BLOCK = (
    "Felix Bredl, Einzelunternehmen (QuickAlert)<br/>"
    "Scharnhorststr. 46, 80992 München, Deutschland<br/>"
    "E-Mail: QuickAlert@Outlook.de · Telefon: +49 151 19784023"
)

PRODUCING_FACTORY = (
    "Ningbo Chakesi Electronic Co., Ltd, "
    "No. 1609, Bingmasi Road, Fengshan Street, Yuyao 315499, "
    "Ningbo, Zhejiang, China"
)


def build_styles():
    base = getSampleStyleSheet()
    styles = {
        "title": ParagraphStyle(
            "Title",
            parent=base["Title"],
            fontName="Helvetica-Bold",
            fontSize=18,
            leading=22,
            spaceAfter=4 * mm,
            alignment=1,
            textColor=colors.HexColor("#18181B"),
        ),
        "subtitle": ParagraphStyle(
            "Subtitle",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=11,
            leading=14,
            alignment=1,
            spaceAfter=8 * mm,
            textColor=colors.HexColor("#52525B"),
        ),
        "h2": ParagraphStyle(
            "H2",
            parent=base["Heading2"],
            fontName="Helvetica-Bold",
            fontSize=10,
            leading=12,
            textColor=colors.HexColor("#18181B"),
            spaceBefore=2 * mm,
            spaceAfter=1 * mm,
            textTransform="uppercase",
        ),
        "body": ParagraphStyle(
            "Body",
            parent=base["BodyText"],
            fontName="Helvetica",
            fontSize=9.5,
            leading=12.5,
            textColor=colors.HexColor("#27272A"),
        ),
        "small": ParagraphStyle(
            "Small",
            parent=base["BodyText"],
            fontName="Helvetica",
            fontSize=8,
            leading=10,
            textColor=colors.HexColor("#71717A"),
        ),
        "mono": ParagraphStyle(
            "Mono",
            parent=base["BodyText"],
            fontName="Courier",
            fontSize=8.5,
            leading=11,
            textColor=colors.HexColor("#27272A"),
        ),
        "signature": ParagraphStyle(
            "Signature",
            parent=base["BodyText"],
            fontName="Helvetica",
            fontSize=9,
            leading=12,
            textColor=colors.HexColor("#27272A"),
        ),
    }
    return styles


def kv_table(rows, styles, col_widths=(45 * mm, 130 * mm)):
    data = []
    for label, value in rows:
        data.append(
            [
                Paragraph(f"<b>{label}</b>", styles["body"]),
                Paragraph(value, styles["body"]),
            ]
        )
    t = Table(data, colWidths=col_widths)
    t.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
                ("TOPPADDING", (0, 0), (-1, -1), 3),
                ("LINEBELOW", (0, 0), (-1, -2), 0.25, colors.HexColor("#E4E4E7")),
            ]
        )
    )
    return t


def standards_table(rows, styles):
    data = [[Paragraph("<b>Richtlinie / Directive</b>", styles["body"]),
             Paragraph("<b>Angewandte Normen / Applied standards</b>", styles["body"]),
             Paragraph("<b>Prüfbericht / Test report</b>", styles["body"])]]
    for directive, norms, report in rows:
        data.append(
            [
                Paragraph(directive, styles["body"]),
                Paragraph(norms, styles["body"]),
                Paragraph(report, styles["mono"]),
            ]
        )
    t = Table(data, colWidths=(45 * mm, 85 * mm, 45 * mm), repeatRows=1)
    t.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#FAFAFA")),
                ("BOX", (0, 0), (-1, -1), 0.5, colors.HexColor("#D4D4D8")),
                ("INNERGRID", (0, 0), (-1, -1), 0.25, colors.HexColor("#E4E4E7")),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
                ("TOPPADDING", (0, 0), (-1, -1), 5),
                ("LEFTPADDING", (0, 0), (-1, -1), 5),
                ("RIGHTPADDING", (0, 0), (-1, -1), 5),
            ]
        )
    )
    return t


def signature_block(styles):
    data = [
        [
            Paragraph(
                f"Ort, Datum / Place, Date:<br/><b>{ISSUE_PLACE}, {ISSUE_DATE}</b>",
                styles["signature"],
            ),
            Paragraph(
                "Unterschrift / Signature:<br/><br/>"
                "_______________________________<br/>"
                "<b>Felix Bredl</b><br/>"
                "Inhaber / Owner — QuickAlert",
                styles["signature"],
            ),
        ]
    ]
    t = Table(data, colWidths=(85 * mm, 90 * mm))
    t.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("TOPPADDING", (0, 0), (-1, -1), 6),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
            ]
        )
    )
    return t


def build_pro(styles):
    story = []
    story.append(Paragraph("EU-Konformitätserklärung", styles["title"]))
    story.append(
        Paragraph(
            "EU Declaration of Conformity — QuickAlert PRO (CH-019, V-16 Beacon Light IoT, geolokalisiert)",
            styles["subtitle"],
        )
    )

    story.append(Paragraph("1. Hersteller bzw. für das Inverkehrbringen Verantwortlicher in der EU<br/>"
                           "<font size=8 color='#71717A'>Manufacturer / Person responsible for placing on the EU market</font>",
                           styles["h2"]))
    story.append(Paragraph(MANUFACTURER_BLOCK, styles["body"]))
    story.append(Spacer(1, 3 * mm))
    story.append(
        Paragraph(
            "<i>Hinweis / Note:</i> Felix Bredl bringt das Produkt unter der eigenen Marke „QuickAlert“ "
            "in der EU in Verkehr und gilt damit nach Art. 8 Abs. 2 RL 2014/30/EU bzw. Art. 12 Abs. 2 "
            "RL 2014/53/EU als Hersteller. Produzierendes Werk: " + PRODUCING_FACTORY + ".",
            styles["small"],
        )
    )
    story.append(Spacer(1, 4 * mm))

    story.append(Paragraph("2. Gegenstand der Erklärung / Object of the declaration", styles["h2"]))
    story.append(
        kv_table(
            [
                ("Produktbezeichnung / Product", "QuickAlert PRO — V-16 Beacon Light IoT (geolokalisiert / geolocated)"),
                ("Modell / Model", "CH-019"),
                ("Funktion / Function",
                 "Vorsignalisierungsleuchte für Gefahrensituationen mit GPS-Geolokalisierung "
                 "und Mobilfunkanbindung an die spanische Verkehrsbehörde (DGT 3.0)"),
                ("Versorgung / Power supply", "DC 4,5 V (3 × 1,5 V AA-Batterien)"),
            ],
            styles,
        )
    )
    story.append(Spacer(1, 4 * mm))

    story.append(Paragraph("3. Konformitätserklärung / Declaration", styles["h2"]))
    story.append(
        Paragraph(
            "Der oben bezeichnete Erklärungsgegenstand entspricht den einschlägigen "
            "Harmonisierungsrechtsvorschriften der Union. Die ausschließliche Verantwortung für die "
            "Ausstellung dieser Konformitätserklärung trägt der Hersteller.<br/><br/>"
            "<i>This declaration of conformity is issued under the sole responsibility of the manufacturer. "
            "The object of the declaration described above is in conformity with the relevant Union "
            "harmonisation legislation.</i>",
            styles["body"],
        )
    )
    story.append(Spacer(1, 4 * mm))

    story.append(Paragraph("4. Angewandte Richtlinien und Normen / Applicable directives and standards", styles["h2"]))
    story.append(
        standards_table(
            [
                (
                    "EMV-Richtlinie 2014/30/EU<br/><font size=8 color='#71717A'>EMC Directive</font>",
                    "EN IEC 55015:2019+A11:2020 · EN 61547:2009 · "
                    "EN IEC 61000-3-2:2019+A1:2021 · EN 61000-3-3:2013+A1:2019+A2:2021",
                    "PTC25032612510E-EM01",
                ),
                (
                    "Funkanlagen-RL 2014/53/EU<br/><font size=8 color='#71717A'>RED</font>",
                    "ETSI EN 301 908-1 V15.2.1 · ETSI EN 301 908-13 V13.2.1 · "
                    "ETSI EN 303 413 V1.2.1 · ETSI EN 301 489-1 V2.2.3 · "
                    "ETSI EN 301 489-19 V2.2.1 · ETSI EN 301 489-52 V1.2.1 · "
                    "EN IEC 62311:2020 · EN 50665:2017 · EN IEC 62368-1:2020+A11:2020",
                    "PTC25032612509E-RF01",
                ),
                (
                    "RoHS-RL 2011/65/EU + (EU) 2015/863<br/><font size=8 color='#71717A'>RoHS</font>",
                    "IEC 62321-Reihe (62321-1, -2, -3-1, -3-2, -4, -5, -6, -7-1, -7-2, -8)",
                    "PTC25032612512C-EN01",
                ),
                (
                    "RD 1030/2022 (Spanien) zur Änderung des RD 159/2021<br/>"
                    "<font size=8 color='#71717A'>Spanish V-16 geolocation regulation</font>",
                    "Anforderungen an geolokalisierte V-16-Vorsignalisierungsleuchten "
                    "(Pflicht zur Datenübermittlung an DGT 3.0 ab 01.01.2026)",
                    "IDIADA PC26020115",
                ),
            ],
            styles,
        )
    )
    story.append(Spacer(1, 3 * mm))
    story.append(
        Paragraph(
            "Konformitätsbewertungsverfahren: Modul A (interne Fertigungskontrolle) auf Basis "
            "vollständig harmonisierter Normen. Eine notifizierte Stelle ist nicht eingebunden. "
            "Die technische Dokumentation einschließlich der oben genannten Prüfberichte wird "
            "gemäß Art. 21 RL 2014/53/EU zehn Jahre ab Inverkehrbringen durch den Hersteller "
            "bereitgehalten.",
            styles["small"],
        )
    )
    story.append(Spacer(1, 5 * mm))

    story.append(Paragraph("5. Unterzeichnet für und im Namen von / Signed for and on behalf of", styles["h2"]))
    story.append(signature_block(styles))
    story.append(Spacer(1, 3 * mm))
    story.append(
        Paragraph(
            "Diese Konformitätserklärung wurde elektronisch erstellt und ist auch ohne handschriftliche "
            "Unterschrift gültig, sofern sie über die offizielle Domain quickalert.eu bereitgestellt wird. "
            "Aktuelle Fassung abrufbar unter: https://quickalert.eu/doc/pro",
            styles["small"],
        )
    )
    return story


def build_base(styles):
    story = []
    story.append(Paragraph("EU-Konformitätserklärung", styles["title"]))
    story.append(
        Paragraph(
            "EU Declaration of Conformity — QuickAlert BASE (CH-400-2, V-16 Beacon Light, ohne GPS)",
            styles["subtitle"],
        )
    )

    story.append(Paragraph("1. Hersteller bzw. für das Inverkehrbringen Verantwortlicher in der EU<br/>"
                           "<font size=8 color='#71717A'>Manufacturer / Person responsible for placing on the EU market</font>",
                           styles["h2"]))
    story.append(Paragraph(MANUFACTURER_BLOCK, styles["body"]))
    story.append(Spacer(1, 3 * mm))
    story.append(
        Paragraph(
            "<i>Hinweis / Note:</i> Felix Bredl bringt das Produkt unter der eigenen Marke „QuickAlert“ "
            "in der EU in Verkehr und gilt damit nach Art. 8 Abs. 2 RL 2014/30/EU als Hersteller. "
            "Ursprüngliches produzierendes Werk laut Prüfberichten: Ningbo Alite Lighting Co. Ltd, "
            "Liutang Village, Chongshou Town, Cixi City, Zhejiang, China.",
            styles["small"],
        )
    )
    story.append(Spacer(1, 4 * mm))

    story.append(Paragraph("2. Gegenstand der Erklärung / Object of the declaration", styles["h2"]))
    story.append(
        kv_table(
            [
                ("Produktbezeichnung / Product", "QuickAlert BASE — V-16 Beacon Light (ohne GPS / no GPS)"),
                ("Modell / Model", "CH-400-2"),
                ("Funktion / Function",
                 "Vorsignalisierungsleuchte für Gefahrensituationen, autarker Betrieb ohne Funkanbindung"),
                ("Versorgung / Power supply", "Wiederaufladbarer Akku / Batterie"),
            ],
            styles,
        )
    )
    story.append(Spacer(1, 4 * mm))

    story.append(Paragraph("3. Konformitätserklärung / Declaration", styles["h2"]))
    story.append(
        Paragraph(
            "Der oben bezeichnete Erklärungsgegenstand entspricht den einschlägigen "
            "Harmonisierungsrechtsvorschriften der Union. Die ausschließliche Verantwortung für die "
            "Ausstellung dieser Konformitätserklärung trägt der Hersteller.<br/><br/>"
            "<i>This declaration of conformity is issued under the sole responsibility of the manufacturer. "
            "The object of the declaration described above is in conformity with the relevant Union "
            "harmonisation legislation.</i>",
            styles["body"],
        )
    )
    story.append(Spacer(1, 4 * mm))

    story.append(Paragraph("4. Angewandte Richtlinien und Normen / Applicable directives and standards", styles["h2"]))
    story.append(
        standards_table(
            [
                (
                    "EMV-Richtlinie 2014/30/EU<br/><font size=8 color='#71717A'>EMC Directive</font>",
                    "EN IEC 55015:2019+A11:2020 · EN 61547:2009",
                    "SHEM2105004843LM<br/>(SHEM210500484301)",
                ),
                (
                    "RoHS-RL 2011/65/EU + (EU) 2015/863<br/><font size=8 color='#71717A'>RoHS</font>",
                    "IEC 62321-3-1:2013 · IEC 62321-6:2015 (EDXRF / GC-MS)",
                    "PTC23080110701C-EN01",
                ),
                (
                    "RD 2822/1998 Anhang XI (Spanien)<br/>"
                    "<font size=8 color='#71717A'>Spanish V-16 luminous device regulation (legacy)</font>",
                    "V-16 Anforderungen für optische Vorsignalisierung (ohne Geolokalisierung)",
                    "IDIADA PC21020060",
                ),
            ],
            styles,
        )
    )
    story.append(Spacer(1, 3 * mm))
    story.append(
        Paragraph(
            "<b>Wichtiger rechtlicher Hinweis / Important legal note:</b> Das Modell QuickAlert BASE "
            "verfügt über keine Geolokalisierung und ist nicht nach RD 1030/2022 zertifiziert. In Spanien "
            "ist es ab 01.01.2026 nicht mehr zugelassen, das Warndreieck zu ersetzen. Für den "
            "spanischen Markt ist ausschließlich das Modell QuickAlert PRO (CH-019, IDIADA PC26020115) "
            "geeignet.",
            styles["small"],
        )
    )
    story.append(Spacer(1, 3 * mm))
    story.append(
        Paragraph(
            "Konformitätsbewertungsverfahren: Modul A (interne Fertigungskontrolle) auf Basis "
            "vollständig harmonisierter Normen. Eine notifizierte Stelle ist nicht eingebunden. "
            "Die technische Dokumentation wird gemäß Art. 7 RL 2014/30/EU zehn Jahre ab "
            "Inverkehrbringen durch den Hersteller bereitgehalten.",
            styles["small"],
        )
    )
    story.append(Spacer(1, 5 * mm))

    story.append(Paragraph("5. Unterzeichnet für und im Namen von / Signed for and on behalf of", styles["h2"]))
    story.append(signature_block(styles))
    story.append(Spacer(1, 3 * mm))
    story.append(
        Paragraph(
            "Diese Konformitätserklärung wurde elektronisch erstellt und ist auch ohne handschriftliche "
            "Unterschrift gültig, sofern sie über die offizielle Domain quickalert.eu bereitgestellt wird. "
            "Aktuelle Fassung abrufbar unter: https://quickalert.eu/doc/base",
            styles["small"],
        )
    )
    return story


def build_pdf(filename, story):
    out_path = OUT_DIR / filename
    doc = SimpleDocTemplate(
        str(out_path),
        pagesize=A4,
        leftMargin=18 * mm,
        rightMargin=18 * mm,
        topMargin=18 * mm,
        bottomMargin=15 * mm,
        title="EU-Konformitätserklärung — QuickAlert",
        author="Felix Bredl (QuickAlert)",
        subject="EU Declaration of Conformity",
    )
    doc.build(story)
    print(f"wrote {out_path} ({out_path.stat().st_size:,} bytes)")


def main():
    styles = build_styles()
    build_pdf("doc-pro.pdf", build_pro(styles))
    build_pdf("doc-base.pdf", build_base(styles))


if __name__ == "__main__":
    main()
