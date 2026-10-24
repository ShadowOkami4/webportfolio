(() => {
    const STORAGE_KEY = 'okami-language';

    const common = {
        'LunaEcho cat bot logo with a pink and blue orbit': 'LunaEcho-Katzenbot-Logo mit pinkem und blauem Orbit',
        'Skip to content': 'Zum Inhalt springen',
        'Okami home': 'Okami Startseite',
        'Menu': 'Menü',
        'Primary navigation': 'Hauptnavigation',
        'Project navigation': 'Projektnavigation',
        'Project facts': 'Projektfakten',
        'Overview': 'Überblick',
        'Roadmap': 'Roadmap',
        'Contact': 'Kontakt',
        'Source ↗': 'Quellcode ↗',
        '← Back to my projects': '← Zurück zu meinen Projekten',
        'See my other projects': 'Meine anderen Projekte',
        'Back to top ↑': 'Nach oben ↑',
        'Support me on Ko-fi': 'Unterstütze mich auf Ko-fi',
        'Site content unless credited otherwise. Project code follows its repository license.': 'Website-Inhalte, sofern nicht anders gekennzeichnet. Projektcode folgt der Lizenz des jeweiligen Repositories.',
        'Copy': 'Kopieren',
        'Copied': 'Kopiert',
        'Select text': 'Text markieren',
        'PROJECT / 01': 'PROJEKT / 01',
        'PROJECT / 02': 'PROJEKT / 02',
        'PROJECT / 03': 'PROJEKT / 03',
        'Planned': 'Geplant',
        'In development': 'In Entwicklung',
        'Open source': 'Open Source',
        'Privacy Policy': 'Datenschutzerklärung',
        'Terms of Service': 'Nutzungsbedingungen',
        'Terms': 'Bedingungen',
        'Privacy': 'Datenschutz',
        'Data request': 'Datenanfrage',
        'Automation': 'Automatisierung',
        'Worldbuilding': 'Weltenbau',
        'The Mirrored Realms': 'Die Spiegelreiche',
        'Effective': 'Gültig ab',
        'Last updated': 'Zuletzt aktualisiert',
        'Service status': 'Dienststatus',
        'Pre-release': 'Vorabversion',
        'On this page': 'Auf dieser Seite',
        'Summary': 'Zusammenfassung',
        'Rules': 'Regeln',
        'Your rights': 'Deine Rechte',
        'Data': 'Daten',
        'and': 'und',
        'Email': 'E-Mail',
        'with the subject': 'mit dem Betreff'
    };

    const home = {
        // Material 3 Expressive redesign: casual homepage copy.
        'Digital workshop · Germany': 'Digitale Werkstatt · Deutschland',
        'Welcome to my digital workshop.': 'Willkommen in meiner digitalen Werkstatt.',
        'Half finished,': 'Halb fertig,',
        'fully loved.': 'heiß geliebt.',
        'I’m Okami, a hobby developer from Germany. Everything here started as an experiment; some of it grew into real projects.': 'Ich bin Okami, ein Hobby-Entwickler aus Deutschland. Alles hier hat als Experiment angefangen – manches ist zu einem echten Projekt gewachsen.',
        'I’m Okami, a German hobby developer building things in my free time. No company and no team behind it, just me, a lot of curiosity and the habit of learning by doing.': 'Ich bin Okami, ein Hobby-Entwickler aus Deutschland, der in seiner Freizeit Dinge baut. Keine Firma und kein Team dahinter – nur ich, jede Menge Neugier und die Angewohnheit, durchs Machen zu lernen.',
        'I work on what I actually want to use: a Linux desktop shell, a Discord bot for communities and a D&D world that got a little out of hand. When something is ready, it goes online so you can try it, fork it or borrow the good bits. On YouTube you’ll find gaming and project previews; on Twitch I stream for fun.': 'Ich arbeite an dem, was ich selbst nutzen will: einer Linux-Desktop-Shell, einem Discord-Bot für Communities und einer D&D-Welt, die ein bisschen aus dem Ruder gelaufen ist. Wenn etwas fertig ist, geht es online – zum Ausprobieren, Forken oder um dir die besten Teile zu schnappen. Auf YouTube gibt’s Gaming und Projekt-Vorschauen; auf Twitch streame ich aus Spaß.',
        'Built by hand.': 'Von Hand gebaut.',
        'Time in Germany': 'Uhrzeit in Deutschland',
        'See what I’m building': 'Schau dir meine Projekte an',
        'Say hi': 'Sag Hallo',
        'No studio, no master plan.': 'Kein Studio, kein Masterplan.',
        'Just stuff I got curious about.': 'Nur Dinge, die mich neugierig gemacht haben.',
        'How it usually goes': 'So läuft’s meistens',
        'Something catches my eye.': 'Irgendwas weckt mein Interesse.',
        'I build the version I’d want to use – and learn a ton on the way.': 'Ich baue die Version, die ich selbst nutzen würde – und lerne dabei jede Menge.',
        'Once it’s worth showing, it goes public.': 'Sobald es sich zeigen lässt, wird es öffentlich.',
        'AI transparency': 'KI-Transparenz',
        'Yes, I use AI.': 'Ja, ich nutze KI.',
        'AI tools help me brainstorm, sketch prototypes, debug and learn. I review and adapt what comes out, make the calls myself, and I’m responsible for everything I publish.': 'KI-Tools helfen mir beim Brainstorming, bei Prototypen, beim Debuggen und beim Lernen. Ich prüfe und überarbeite die Ergebnisse, treffe die Entscheidungen selbst und stehe für alles gerade, was ich veröffentliche.',
        'Every project started with something I wanted to use, understand or imagine. These are the ones that made it out into the world.': 'Jedes Projekt begann mit etwas, das ich nutzen, verstehen oder mir ausmalen wollte. Das hier sind die, die es raus in die Welt geschafft haben.',
        '0.3.0dev · public preview': '0.3.0dev · öffentliche Vorschau',
        'Linux / Hyprland desktop shell': 'Linux / Hyprland-Desktop-Shell',
        'Discord / in development': 'Discord / in Entwicklung',
        'Tabletop / open-source setting': 'Tabletop / Open-Source-Setting',
        'Open-source world setting': 'Open-Source-Weltensetting',
        'Got a question?': 'Eine Frage?',
        'Or a weird idea?': 'Oder eine verrückte Idee?',
        'Feedback on a project, help with a Linux setup, a campaign idea or just a quick hello – I’m happy to hear from you.': 'Feedback zu einem Projekt, Hilfe beim Linux-Setup, eine Kampagnenidee oder einfach ein kurzes Hallo – ich freu mich, von dir zu hören.',
        'Email · the best way to reach me': 'E-Mail · so erreichst du mich am besten',
        'Drop me a line.': 'Schreib mir.',
        'I read everything – even if an answer sometimes takes a few days.': 'Ich lese alles – auch wenn eine Antwort mal ein paar Tage dauert.',
        'Built for fun · shared with everyone': 'Aus Spaß gebaut · mit allen geteilt',
        'About': 'Über mich',
        'Work': 'Projekte',
        'Okami wolf logo': 'Okami-Wolfslogo',
        'My projects': 'Meine Projekte',
        'View the Voidline project': 'Das Voidline-Projekt ansehen',
        'Take a look': 'Ansehen',
        'View the LunaEcho project': 'Das LunaEcho-Projekt ansehen',
        'Enter The Mirrored Realms project': 'Das Projekt „Die Spiegelreiche“ betreten',
        'The Mirrored Realms': 'Die Spiegelreiche',
        'Enter the vault': 'Das Archiv betreten',
        "LET'S TALK ABOUT": 'LASS UNS ÜBER',
        'Find Okami online': 'Okami online finden',
        'Voidline shell with the Action Center open': 'Voidline-Shell mit geöffnetem Action Center',
        'Hyprland desktop shell': 'Hyprland-Desktopshell',
    };

    const voidline = {
        'Voidline | Okami': 'Voidline | Okami',
        'Install': 'Installation',
        'View on GitHub ↗': 'Auf GitHub ansehen ↗',
        'Open on YouTube ↗': 'Auf YouTube öffnen ↗',
        'VOIDLINE / PROJECT 01': 'VOIDLINE / PROJEKT 01',
        'Voidline | Hyprland Desktop Shell': 'Voidline | Hyprland-Desktopshell',
        'Voidline is an experimental open-source desktop shell and connected experience around Hyprland, currently available as the 0.3.0dev development release.': 'Voidline ist eine experimentelle Open-Source-Desktopshell und zusammenhängende Erfahrung rund um Hyprland, die derzeit als Entwicklungsversion 0.3.0dev verfügbar ist.',
        'Features': 'Funktionen',
        'Development release notice': 'Hinweis zur Entwicklungsversion',
        'Current features': 'Aktuelle Funktionen',
        'Action Center': 'Action Center',
        'Voidline shell with the Action Center open': 'Voidline-Shell mit geöffnetem Action Center',
        'Voidline shell showing the About this Computer settings page': 'Voidline-Shell mit der Einstellungsseite „Über diesen Computer“',
        'Clone the development release': 'Entwicklungsversion klonen',
        'Open the project folder': 'Projektordner öffnen',
        'Run the installer': 'Installer ausführen',
        'Open source / In development': 'Open Source / In Entwicklung',
        'Open the Voidline repository ↗': 'Voidline-Repository öffnen ↗',
        'Join the Discord ↗': 'Discord beitreten ↗',
        'Experience': 'Erlebnis',
        'Open source / Hyprland': 'Open Source / Hyprland',
        'Public development preview – not an alpha, not a beta.': 'Öffentliche Entwicklungsvorschau – keine Alpha, keine Beta.',
        'This is a preview of where Voidline is heading, and its design and direction can change at any time. You can test it on Arch Linux with Hyprland, but it isn’t meant to be a stable everyday shell yet.': 'Das ist eine Vorschau darauf, wohin sich Voidline entwickelt – Design und Richtung können sich jederzeit ändern. Du kannst es unter Arch Linux mit Hyprland testen, als stabile Alltags-Shell ist es aber noch nicht gedacht.',
        'Explore the interface ↓': 'Oberfläche erkunden ↓',
        'Join Discord ↗': 'Discord beitreten ↗',
        'Action Center': 'Action Center',
        'Current development build': 'Aktueller Entwicklungsbuild',
        'Arch Linux / Hyprland': 'Arch Linux / Hyprland',
        'Release': 'Version',
        'Platform': 'Plattform',
        'Interface': 'Oberfläche',
        'Tools': 'Werkzeuge',
        'The experience': 'Das Erlebnis',
        'Why it exists': 'Warum es existiert',
        'Designed for': 'Entwickelt für',
        'Everyday desktop use': 'Den täglichen Desktop-Einsatz',
        'Common controls stay close, readable, and visually connected instead of being hidden across separate utilities.': 'Häufig genutzte Bedienelemente bleiben leicht erreichbar, lesbar und visuell verbunden, statt sich in getrennten Werkzeugen zu verstecken.',
        'Built in the open': 'Offen entwickelt',
        'Inspectable and adaptable': 'Nachvollziehbar und anpassbar',
        'The source and development release are public so people can test the direction, inspect the implementation, and report issues.': 'Quellcode und Entwicklungsversion sind öffentlich, damit Interessierte die Richtung testen, die Umsetzung nachvollziehen und Probleme melden können.',
        'Quick access': 'Schneller Zugriff',
        'The parts of the desktop you reach for throughout the day.': 'Die Desktop-Bereiche, die du im Laufe des Tages immer wieder nutzt.',
        'Desktop bar and adaptive panels': 'Desktop-Leiste und adaptive Panels',
        'Action Center and quick settings': 'Action Center und Schnelleinstellungen',
        'Notifications and system tray': 'Benachrichtigungen und System-Tray',
        'System experience': 'Systemerlebnis',
        'Core screens designed to feel like they belong together.': 'Zentrale Oberflächen, die sich wie aus einem Guss anfühlen.',
        'Unified settings application': 'Einheitliche Einstellungsanwendung',
        'Lock screen and session controls': 'Sperrbildschirm und Sitzungssteuerung',
        'Matching SDDM login theme': 'Passendes SDDM-Anmeldetheme',
        'Native foundation': 'Native Grundlage',
        'Supporting tools for control, performance, and future growth.': 'Unterstützende Werkzeuge für Steuerung, Leistung und zukünftige Erweiterungen.',
        'Rust backend and voidlinectl': 'Rust-Backend und voidlinectl',
        'Native Rust terminal': 'Natives Rust-Terminal',
        'English, German, and Polish locales': 'Englische, deutsche und polnische Übersetzungen',
        'Settings preview': 'Einstellungsvorschau',
        'Clear navigation': 'Klare Navigation',
        'Related controls are grouped into familiar categories.': 'Zusammengehörige Bedienelemente sind in vertrauten Kategorien gruppiert.',
        'Consistent surfaces': 'Einheitliche Oberflächen',
        'Cards, controls, and spacing follow the same rules across the shell.': 'Karten, Bedienelemente und Abstände folgen in der gesamten Shell denselben Regeln.',
        'Useful system context': 'Nützliche Systeminformationen',
        'Important device information stays easy to scan.': 'Wichtige Geräteinformationen bleiben schnell erfassbar.',
        'About the wallpaper': 'Über das Wallpaper',
        'The purple wallpaper in the current screenshots was AI-generated for the Voidline project. The desktop interface itself is the working development build.': 'Das violette Wallpaper in den aktuellen Screenshots wurde für das Voidline-Projekt KI-generiert. Die Desktop-Oberfläche selbst stammt aus dem funktionierenden Entwicklungsbuild.',
        'Project showcase': 'Projekt-Showcase',
        'Current Voidline shell showcase by Okami on YouTube': 'Aktueller Voidline-Shell-Showcase von Okami auf YouTube',
        'Try Voidline': 'Voidline ausprobieren',
        'Voidline currently targets Arch Linux with Hyprland. Read the repository requirements and back up your current configuration before installing.': 'Voidline richtet sich derzeit an Arch Linux mit Hyprland. Lies vor der Installation die Anforderungen im Repository und sichere deine aktuelle Konfiguration.',
        'Before you begin': 'Bevor du beginnst',
        'Current requirements': 'Aktuelle Anforderungen',
        'PipeWire and WirePlumber': 'PipeWire und WirePlumber',
        'Run the installer as your regular user, not with sudo.': 'Führe den Installer als normaler Benutzer aus, nicht mit sudo.'
    };

    const mirrorgate = {
        'SRD 5.2.1 rules': 'Regeln nach SRD 5.2.1',
        'Linked Markdown notes': 'Verknüpfte Markdown-Notizen',
        'Built for': 'Gebaut für',
        'Terms & attribution →': 'Bedingungen & Namensnennung →',
        'Present age': 'Gegenwärtiges Zeitalter',
        'The Shattered Hope Era': 'Die Shattered-Hope-Ära',
        'Virtual tabletop': 'Virtueller Spieltisch',
        'Atlas VTT (optional)': 'Atlas VTT (optional)',
        'Prelude and chapters 1–3 are drafted; now outlining the rest of the adventure.': 'Prolog und Kapitel 1–3 sind entworfen; jetzt wird der Rest des Abenteuers skizziert.',
        'Open the folder in Obsidian 1.8.7 or newer and trust its community plugins when asked.': 'Öffne den Ordner in Obsidian 1.8.7 oder neuer und vertraue den Community-Plugins, wenn danach gefragt wird.',
        'Library or books': 'Bibliothek oder Bücher',
        'Follow the links in any order, or read the same records as books from the bookshelf in': 'Folge den Links in beliebiger Reihenfolge oder lies dieselben Aufzeichnungen als Bücher aus dem Bücherregal in',
        'A free, open-source Obsidian plugin by Fabian Urbanek (ByteMirror) that turns the vault into a virtual tabletop: battle maps, tokens, fog of war, dice, and initiative. Optional; every note works without it.': 'Ein kostenloses Open-Source-Plugin für Obsidian von Fabian Urbanek (ByteMirror), das den Vault in einen virtuellen Spieltisch verwandelt: Kampfkarten, Tokens, Nebel des Krieges, Würfel und Initiative. Optional; jede Notiz funktioniert auch ohne.',
        'Atlas VTT on GitHub ↗': 'Atlas VTT auf GitHub ↗',
        'Own tooling': 'Eigene Werkzeuge',
        'Cartography scripts': 'Kartografie-Skripte',
        'The world map comes from the project’s own scripts: one seed, simulated terrain, erosion, and climate, then rivers, realms, settlements, and roads.': 'Die Weltkarte stammt aus den eigenen Skripten des Projekts: ein Seed, simuliertes Gelände, Erosion und Klima, danach Flüsse, Reiche, Siedlungen und Straßen.',
        'Planned for later map work. It belongs to a later stage of development and is not yet part of production.': 'Für spätere Kartenarbeit geplant. Es gehört zu einer späteren Entwicklungsphase und ist noch nicht Teil der Produktion.',
        'Made by hand': 'Von Hand gemacht',
        'The Mirrored Realms is made by Okami, about two years and many scrapped versions in the making. The story, its characters, and where it goes are written by hand. AI (Claude) only helps with checks: whether the map and the lore agree, grammar and spelling, some balancing of mechanics, and keeping the vault organised.': 'The Mirrored Realms stammt von Okami – rund zwei Jahre Arbeit und viele verworfene Versionen. Die Geschichte, ihre Figuren und wohin sie führt, sind von Hand geschrieben. KI (Claude) hilft nur beim Prüfen: ob Karte und Lore zusammenpassen, bei Grammatik und Rechtschreibung, etwas beim Balancing der Mechaniken und beim Ordnen des Vaults.',
        'Artwork': 'Artwork',
        'The Mirrored': 'Die',
        'Realms': 'Spiegelreiche',
        'Enter the vault ↗': 'Das Archiv betreten ↗',
        'Read the records ↓': 'Die Aufzeichnungen lesen ↓',
        'Obsidian vault': 'Obsidian-Vault',
        'An abstract mirror doorway leading into the Library of Kagami': 'Ein abstraktes Spiegeltor, das in die Bibliothek von Kagami führt',
        '“A mirror is a door pretending to be furniture.”': '„Ein Spiegel ist eine Tür, die vorgibt, ein Möbelstück zu sein.“',
        'ARCHIVE / UNSEALED': 'ARCHIV / ENTSIEGELT',
        'Planned journeys': 'Geplante Reisen',
        'Every planned adventure belongs to the same setting. A single night beside the wrong mirror may end at dawn, or return much later as the first thread of a history the players have already changed.': 'Jedes geplante Abenteuer gehört zum selben Setting. Eine einzelne Nacht neben dem falschen Spiegel kann im Morgengrauen enden oder viel später als erster Faden einer Geschichte zurückkehren, die die Spielenden bereits verändert haben.',
        'One-shots': 'One-Shots',
        'Ten doors into cursed estates, forbidden archives, unstable scars, and mirrors that promise to open only once.': 'Zehn Türen zu verfluchten Anwesen, verbotenen Archiven, instabilen Narben und Spiegeln, die versprechen, sich nur einmal zu öffnen.',
        'Short adventures': 'Kurze Abenteuer',
        'Five deeper trails where local conflicts expose recurring faces, dangerous relics, and consequences that refuse to remain where they began.': 'Fünf tiefere Pfade, auf denen lokale Konflikte wiederkehrende Gesichter, gefährliche Relikte und Folgen offenbaren, die nicht dort bleiben wollen, wo sie begonnen haben.',
        'Campaign frameworks': 'Kampagnenrahmen',
        'Roadmap:': 'Roadmap:',
        'Open the archive': 'Das Archiv öffnen',
        'Enter through': 'Betritt es durch',
        'Obsidian.': 'Obsidian.',
        'The Mirrored Realms does not expect to be read from beginning to end. It expects curiosity. Open the repository as an Obsidian vault, find the welcome record, and follow whichever name first feels familiar.': 'Die Spiegelreiche erwarten nicht, von Anfang bis Ende gelesen zu werden. Sie erwarten Neugier. Öffne das Repository als Obsidian-Vault, finde die Willkommensaufzeichnung und folge dem ersten Namen, der dir vertraut erscheint.',
        'Open source / Explore freely': 'Open Source / Frei erkunden',
        'The door was never locked.': 'Die Tür war nie verschlossen.',
        'Take what your table needs, change what the records got wrong, and follow the wiki-links until the vault begins answering questions you never asked.': 'Nimm, was deine Spielrunde braucht, ändere, was die Aufzeichnungen falsch festgehalten haben, und folge den Wiki-Links, bis das Archiv Fragen beantwortet, die du nie gestellt hast.',
        'Clone or download': 'Klonen oder herunterladen',
        'Get the complete repository from GitHub.': 'Hole dir das vollständige Repository von GitHub.',
        'Open as a vault': 'Als Vault öffnen',
        'Find the entrance': 'Den Eingang finden',
        'Open': 'Öffne',
        'and meet the library’s custodian.': 'und triff den Hüter der Bibliothek.',
        'The Library of Kagami awaits': 'Die Bibliothek von Kagami wartet',
        'That may be the first thing inside it that tells the truth. Read the records, borrow what your table needs, and leave behind a version of the Mirrored Realms that did not exist before you entered.': 'Das könnte das Erste darin sein, das die Wahrheit sagt. Lies die Aufzeichnungen, nimm, was deine Spielrunde braucht, und hinterlasse eine Version der Spiegelreiche, die vor deinem Eintritt nicht existierte.',
        'Open The Mirrored Realms on GitHub ↗': 'Die Spiegelreiche auf GitHub öffnen ↗',
        'THE MIRRORED REALMS / PROJECT 03': 'DIE SPIEGELREICHE / PROJEKT 03',
        'The Mirrored Realms | Open-Source 5.5e Campaign Setting': 'Die Spiegelreiche | Open-Source-Kampagnensetting für 5.5e',
        'The Mirrored Realms is an evolving, open-source 5.5e-compatible campaign setting built as an interconnected Obsidian vault: the world of Kagameru, the Mirrorgate, and the scars of an ancient divine war.': 'Die Spiegelreiche sind ein wachsendes Open-Source-Kampagnensetting, kompatibel mit 5.5e und aufgebaut als vernetzter Obsidian-Vault: die Welt Kagameru, das Mirrorgate und die Narben eines uralten Götterkriegs.',
        'Enter Kagameru, an evolving open-source 5.5e-compatible setting where roads arrive in the wrong century and mirrors open toward places no map can contain.': 'Betritt Kagameru, ein wachsendes Open-Source-Setting für 5.5e, in dem Straßen im falschen Jahrhundert ankommen und Spiegel sich zu Orten öffnen, die keine Karte fassen kann.',
        'Workflow': 'Workflow',
        'Open source / 5.5e compatible': 'Open Source / 5.5e-kompatibel',
        'The Obsidian vault calls itself an archive. Follow its links long enough and it becomes a world: Kagameru, still bearing the wounds of an ancient divine war, where roads arrive in the wrong century, ruins remember histories that never happened, and mirrors open toward places no map can contain.': 'Der Obsidian-Vault nennt sich ein Archiv. Folgst du seinen Links lange genug, wird daraus eine Welt: Kagameru, noch immer gezeichnet von den Wunden eines uralten Götterkriegs, wo Straßen im falschen Jahrhundert ankommen, Ruinen sich an Geschichten erinnern, die nie geschehen sind, und Spiegel sich zu Orten öffnen, die keine Karte fassen kann.',
        '5.5e compatible': '5.5e-kompatibel',
        'CC BY 4.0': 'CC BY 4.0',
        'Compatible / SRD 5.2.1': 'Kompatibel / SRD 5.2.1',
        'Journeys planned': 'Geplante Reisen',
        'Early development': 'Frühe Entwicklung',
        'World': 'Welt',
        'Kagameru': 'Kagameru',
        'Central mystery': 'Zentrales Mysterium',
        'The Mirrorgate and the Scars of the Primordial War': 'Das Mirrorgate und die Narben des Primordial War',
        'Main campaign': 'Hauptkampagne',
        'Shattered Hope': 'Shattered Hope',
        'Rules foundation': 'Regelgrundlage',
        '5.5e-compatible material using SRD 5.2.1': '5.5e-kompatibles Material auf Basis des SRD 5.2.1',
        'Format': 'Format',
        'Interconnected Obsidian vault': 'Vernetzter Obsidian-Vault',
        'License': 'Lizenz',
        'CC BY 4.0 for original project material': 'CC BY 4.0 für originales Projektmaterial',
        'Standalone / 2 announced': 'Eigenständig / 2 angekündigt',
        'Multishots / 3 announced': 'Multishots / 3 angekündigt',
        'Long term / 1 announced': 'Langfristig / 1 angekündigt',
        'Three long shadows over Kagameru, where crowns, divine wounds, and the Mirrorgate can reshape an entire table’s version of the world. The first is Shattered Hope, the setting’s main campaign.': 'Drei lange Schatten über Kagameru, wo Kronen, göttliche Wunden und das Mirrorgate die Version der Welt einer ganzen Spielrunde neu formen können. Der erste ist Shattered Hope, die Hauptkampagne des Settings.',
        'Current production': 'Aktuelle Produktion',
        'Two doors stand ajar.': 'Zwei Türen stehen einen Spalt offen.',
        'Of the eighteen, only two are being written today. The other announced journeys have a public title and premise, but work on them has not begun; the remaining slots are reserved and still unnamed.': 'Von den achtzehn werden derzeit nur zwei geschrieben. Die übrigen angekündigten Reisen haben einen öffentlichen Titel und eine Prämisse, doch die Arbeit daran hat noch nicht begonnen; die restlichen Plätze sind reserviert und noch namenlos.',
        'Foundation': 'Fundament',
        'Main campaign / Campaign framework': 'Hauptkampagne / Kampagnenrahmen',
        'Estimated progress': 'Geschätzter Fortschritt',
        'Current work': 'Aktuelle Arbeit',
        'Defining the campaign spine and its major arcs.': 'Das Rückgrat der Kampagne und ihre großen Handlungsbögen festlegen.',
        'Active draft': 'Aktiver Entwurf',
        'Short adventure / Multishot': 'Kurzes Abenteuer / Multishot',
        'The eighteen journeys describe the intended complete collection, not work already underway. Progress figures are editorial development estimates, not release dates, and lore, names, and the order of releases may still change as the setting is written and playtested.': 'Die achtzehn Reisen beschreiben die geplante vollständige Sammlung, nicht bereits laufende Arbeit. Fortschrittsangaben sind redaktionelle Entwicklungsschätzungen, keine Veröffentlichungstermine, und Lore, Namen sowie die Reihenfolge der Veröffentlichungen können sich beim Schreiben und Testspielen noch ändern.',
        'Original project material is released under CC BY 4.0: copy, adapt, and publish it with credit. Material from SRD 5.2.1 carries its own attribution, and files from Obsidian plugins or other third-party tools keep their original licenses. The Mirrored Realms is an independent project, not an official Wizards of the Coast product.': 'Originales Projektmaterial steht unter CC BY 4.0: Kopiere, bearbeite und veröffentliche es mit Namensnennung. Material aus dem SRD 5.2.1 trägt eine eigene Namensnennung, und Dateien aus Obsidian-Plugins oder anderen Drittanbieter-Tools behalten ihre ursprünglichen Lizenzen. Die Spiegelreiche sind ein unabhängiges Projekt und kein offizielles Produkt von Wizards of the Coast.',
        'Tools & workflow': 'Werkzeuge & Workflow',
        'The Scriptorium': 'Das Skriptorium',
        'Compatible with Atlas VTT': 'Kompatibel mit Atlas VTT',
        'behind the archive.': 'hinter dem Archiv.',
        'Every archive needs a scriptorium. The Mirrored Realms is written and connected in Obsidian today; other tools wait for the stage of development when maps and play sessions will need them.': 'Jedes Archiv braucht ein Skriptorium. Die Spiegelreiche werden heute in Obsidian geschrieben und verknüpft; andere Werkzeuge warten auf die Entwicklungsphase, in der Karten und Spielrunden sie brauchen werden.',
        'Current workflow': 'Aktueller Workflow',
        'Primary environment': 'Primäre Umgebung',
        'Obsidian': 'Obsidian',
        'The vault is the work itself. Every record is written, linked, and organised in Obsidian: the primary editor, the knowledge base, and the place where Kagameru is built.': 'Der Vault ist das Werk selbst. Jede Aufzeichnung wird in Obsidian geschrieben, verknüpft und geordnet: im primären Editor, in der Wissensbasis und an dem Ort, an dem Kagameru entsteht.',
        'Visit Obsidian ↗': 'Obsidian besuchen ↗',
        'Supporting plugin': 'Unterstützendes Plugin',
        'Atlas VTT': 'Atlas VTT',
        'Planned workflow': 'Geplanter Workflow',
        'Canvas of Kings': 'Canvas of Kings',
        'Canvas of Kings on Steam ↗': 'Canvas of Kings auf Steam ↗',
        'TaleSpire': 'TaleSpire',
        'A planned 3D environment for building places of Kagameru as maps and bringing them to a virtual table. It is reserved for later-stage visualisation and play.': 'Eine geplante 3D-Umgebung, um Orte von Kagameru als Karten zu bauen und an einen virtuellen Spieltisch zu bringen. Sie ist späterer Visualisierung und dem Spiel vorbehalten.',
        'Visit TaleSpire ↗': 'TaleSpire besuchen ↗',
    };

    const lunaecho = {
        'Features': 'Funktionen',
        'No public release yet': 'Noch keine öffentliche Veröffentlichung',
        'You': 'Dir',
        'At a glance': 'Auf einen Blick',
        'Decision': 'Entscheidung',
        'Music': 'Musik',
        'Legal & privacy': 'Rechtliches & Datenschutz',
        'Clear rules.': 'Klare Regeln.',
        'Transparent data use.': 'Transparente Datennutzung.',
        'Document / 01': 'Dokument / 01',
        'Document / 02': 'Dokument / 02',
        'Service rules': 'Dienstregeln',
        'Read the Terms': 'Bedingungen lesen',
        'Data transparency': 'Datentransparenz',
        'Read the Policy': 'Erklärung lesen',
        'Data requests': 'Datenanfragen',
        'Access, correction, or deletion.': 'Auskunft, Berichtigung oder Löschung.',
        'Discord users and authorized server administrators can follow the published request process or contact': 'Discord-Nutzer und autorisierte Serveradministratoren können dem veröffentlichten Anfrageverfahren folgen oder sich an',
        '.': '.',
        'View instructions →': 'Anleitung ansehen →',
        'Review the roadmap ↑': 'Roadmap ansehen ↑'
    };

    const legalCommon = {
        'Back to LunaEcho': 'Zurück zu LunaEcho',
        '← Back to LunaEcho': '← Zurück zu LunaEcho',
        'Official LunaEcho document': 'Offizielles LunaEcho-Dokument',
        'LEGAL / TERMS': 'RECHTLICHES / BEDINGUNGEN',
        'LEGAL / PRIVACY': 'RECHTLICHES / DATENSCHUTZ',
        'Contact the LunaEcho operator.': 'Kontaktiere den LunaEcho-Betreiber.',
        'Never send your Discord password, authentication token, bot token, or backup codes.': 'Sende niemals dein Discord-Passwort, Authentifizierungs-Token, Bot-Token oder Backup-Codes.'
    };

    const terms = {
        'LunaEcho Terms of Service': 'LunaEcho-Nutzungsbedingungen',
        'The official Terms of Service for the LunaEcho Discord application and managed service.': 'Die offiziellen Nutzungsbedingungen für die LunaEcho-Discord-Anwendung und den verwalteten Dienst.',
        'Rules and conditions for using the LunaEcho Discord application and managed service.': 'Regeln und Bedingungen für die Nutzung der LunaEcho-Discord-Anwendung und des verwalteten Dienstes.',
        'Terms navigation': 'Navigation der Nutzungsbedingungen',
        'Terms of': 'Nutzungs-',
        'Service.': 'bedingungen.',
        'These Terms explain the rules for using the LunaEcho Discord application, authorized pre-release testing, and future managed services.': 'Diese Bedingungen erklären die Regeln für die Nutzung der LunaEcho-Discord-Anwendung, autorisierte Tests der Vorabversion und zukünftige verwaltete Dienste.',
        'Plain-language summary': 'Kurz zusammengefasst',
        'Use LunaEcho lawfully, respect Discord and other people, only install it where you have permission, and do not abuse or interfere with the service. LunaEcho is still in development, so features may change and availability is not guaranteed.': 'Nutze LunaEcho rechtmäßig, respektiere Discord und andere Menschen, installiere die Anwendung nur mit entsprechender Berechtigung und missbrauche oder störe den Dienst nicht. LunaEcho befindet sich noch in Entwicklung, daher können sich Funktionen ändern und die Verfügbarkeit ist nicht garantiert.',
        'Terms contents': 'Inhalt der Nutzungsbedingungen',
        'Acceptance': 'Zustimmung',
        'The service': 'Der Dienst',
        'Acceptable use': 'Zulässige Nutzung',
        'Content and data': 'Inhalte und Daten',
        'Hosting models': 'Hostingmodelle',
        'Availability': 'Verfügbarkeit',
        'Responsibility': 'Verantwortung',
        '01 / Acceptance and eligibility': '01 / Zustimmung und Berechtigung',
        'Using LunaEcho means accepting these Terms.': 'Die Nutzung von LunaEcho bedeutet, diesen Bedingungen zuzustimmen.',
        "You must be legally able to accept these Terms and meet Discord's minimum age requirements. If you use LunaEcho for an organization or community, you confirm that you are authorized to act for it.": 'Du musst rechtlich in der Lage sein, diesen Bedingungen zuzustimmen, und die Mindestalteranforderungen von Discord erfüllen. Wenn du LunaEcho für eine Organisation oder Community nutzt, bestätigst du, dass du berechtigt bist, für sie zu handeln.',
        'Your use of Discord remains subject to the': 'Deine Nutzung von Discord unterliegt weiterhin den',
        'Discord Terms of Service': 'Discord-Nutzungsbedingungen',
        'Community Guidelines': 'Community-Richtlinien',
        ". If these Terms conflict with Discord's rules, Discord's rules control your use of Discord.": '. Falls diese Bedingungen den Regeln von Discord widersprechen, gelten für deine Discord-Nutzung die Regeln von Discord.',
        '02 / The service': '02 / Der Dienst',
        'A modular Discord community platform.': 'Eine modulare Discord-Community-Plattform.',
        'LunaEcho is designed to provide community tools such as moderation, onboarding, tickets, leveling, temporary voice channels, server logging, music, and automation. Features are introduced in stages and may not all be available.': 'LunaEcho soll Community-Werkzeuge wie Moderation, Onboarding, Tickets, Levelsystem, temporäre Sprachkanäle, Server-Protokollierung, Musik und Automatisierung bereitstellen. Funktionen werden schrittweise eingeführt und sind möglicherweise nicht alle verfügbar.',
        'Installation authority': 'Installationsberechtigung',
        'You may only add or configure LunaEcho in a Discord server when you have permission from the server owner or an authorized administrator. You are responsible for selecting appropriate bot permissions and configuring features for your community.': 'Du darfst LunaEcho nur zu einem Discord-Server hinzufügen oder dort konfigurieren, wenn du die Erlaubnis des Serverbesitzers oder eines autorisierten Administrators hast. Du bist für die Auswahl geeigneter Bot-Berechtigungen und die Konfiguration der Funktionen für deine Community verantwortlich.',
        '03 / Acceptable use': '03 / Zulässige Nutzung',
        'Do not use LunaEcho to harm people or systems.': 'Nutze LunaEcho nicht, um Menschen oder Systeme zu schädigen.',
        "You must comply with applicable law, these Terms, Discord's rules, and the rights of others. In particular, you must not:": 'Du musst geltendes Recht, diese Bedingungen, die Regeln von Discord und die Rechte anderer einhalten. Insbesondere darfst du nicht:',
        'Use LunaEcho for harassment, abuse, fraud, spam, illegal activity, or rights violations.': 'LunaEcho für Belästigung, Missbrauch, Betrug, Spam, illegale Aktivitäten oder Rechtsverletzungen nutzen.',
        'Probe, disrupt, overload, reverse engineer, or interfere with the managed service except where applicable law expressly permits it.': 'Den verwalteten Dienst untersuchen, stören, überlasten, zurückentwickeln oder beeinträchtigen, außer wenn geltendes Recht dies ausdrücklich erlaubt.',
        'Misrepresent LunaEcho, its operator, or your authority to use it in a server.': 'LunaEcho, seinen Betreiber oder deine Berechtigung zur Nutzung auf einem Server falsch darstellen.',
        'Use automated access outside the documented Discord interactions or supported interfaces.': 'Automatisierten Zugriff außerhalb der dokumentierten Discord-Interaktionen oder unterstützten Schnittstellen verwenden.',
        'Server administrators are responsible for informing members about enabled logging, ticket, moderation, or analytics features where required by law or community rules.': 'Serveradministratoren sind dafür verantwortlich, Mitglieder über aktivierte Protokollierungs-, Ticket-, Moderations- oder Analysefunktionen zu informieren, sofern dies gesetzlich oder durch Community-Regeln erforderlich ist.',
        '04 / Content and data': '04 / Inhalte und Daten',
        'Your content remains yours.': 'Deine Inhalte bleiben deine.',
        'You retain your rights in content submitted through Discord and processed by LunaEcho. You grant us only the limited permission needed to receive, process, store, display, and delete that content to operate, secure, and support the features you choose.': 'Du behältst deine Rechte an Inhalten, die über Discord übermittelt und von LunaEcho verarbeitet werden. Du erteilst uns nur die begrenzte Erlaubnis, die erforderlich ist, um diese Inhalte zum Betrieb, zur Absicherung und zur Unterstützung der von dir gewählten Funktionen zu empfangen, zu verarbeiten, zu speichern, anzuzeigen und zu löschen.',
        'You confirm that you have the rights and permissions needed for content you direct LunaEcho to process. Details about data categories, retention, sharing, and deletion requests are provided in the': 'Du bestätigst, dass du über die erforderlichen Rechte und Berechtigungen für Inhalte verfügst, die LunaEcho in deinem Auftrag verarbeitet. Einzelheiten zu Datenkategorien, Aufbewahrung, Weitergabe und Löschanfragen findest du in der',
        'LunaEcho Privacy Policy': 'LunaEcho-Datenschutzerklärung',
        'Responsibilities depend on who operates the service.': 'Die Verantwortlichkeiten hängen davon ab, wer den Dienst betreibt.',
        'Self-Hosted LunaEcho': 'Selbst gehostetes LunaEcho',
        "When the public repository becomes available, a self-hosted operator controls their own deployment, data, security, updates, and legal compliance. The repository's software license will govern use of the source code. We are not the controller of data processed solely by an independent self-hosted installation.": 'Sobald das öffentliche Repository verfügbar ist, kontrolliert ein selbst hostender Betreiber seine eigene Bereitstellung, Daten, Sicherheit, Updates und rechtliche Konformität. Die Softwarelizenz des Repositorys regelt die Nutzung des Quellcodes. Wir sind nicht Verantwortlicher für Daten, die ausschließlich von einer unabhängigen selbst gehosteten Installation verarbeitet werden.',
        '06 / Availability, changes, and termination': '06 / Verfügbarkeit, Änderungen und Beendigung',
        'Pre-release access can change.': 'Der Zugang zur Vorabversion kann sich ändern.',
        'We may change, pause, restrict, or discontinue features to improve reliability, respond to security or legal concerns, comply with Discord requirements, or develop the product. We will try to communicate material managed-service changes clearly, but we do not promise uninterrupted or error-free availability.': 'Wir können Funktionen ändern, pausieren, einschränken oder einstellen, um die Zuverlässigkeit zu verbessern, auf Sicherheits- oder Rechtsfragen zu reagieren, Discord-Anforderungen einzuhalten oder das Produkt weiterzuentwickeln. Wir versuchen, wesentliche Änderungen am verwalteten Dienst klar zu kommunizieren, garantieren jedoch keine unterbrechungs- oder fehlerfreie Verfügbarkeit.',
        "You may stop using LunaEcho at any time by removing it from your server. We may suspend or end access when we reasonably believe these Terms, Discord's rules, applicable law, security, or service stability are at risk. Where appropriate, we will provide notice and an opportunity to correct the issue.": 'Du kannst die Nutzung von LunaEcho jederzeit beenden, indem du es von deinem Server entfernst. Wir können den Zugang aussetzen oder beenden, wenn wir vernünftigerweise davon ausgehen, dass diese Bedingungen, Discords Regeln, geltendes Recht, Sicherheit oder Dienststabilität gefährdet sind. Soweit angemessen, informieren wir dich und geben dir Gelegenheit, das Problem zu beheben.',
        '07 / Warranties, responsibility, and law': '07 / Gewährleistung, Verantwortung und Recht',
        'Use a pre-release service with appropriate care.': 'Nutze einen Dienst in der Vorabversion mit angemessener Sorgfalt.',
        'LunaEcho is provided on an "as available" basis during development. To the extent permitted by law, we do not make implied promises about fitness for a particular purpose, uninterrupted operation, or preservation of content.': 'LunaEcho wird während der Entwicklung auf Basis der jeweiligen Verfügbarkeit bereitgestellt. Soweit gesetzlich zulässig, geben wir keine stillschweigenden Zusagen zur Eignung für einen bestimmten Zweck, zum unterbrechungsfreien Betrieb oder zum Erhalt von Inhalten.',
        'Nothing in these Terms excludes liability that cannot legally be excluded, including liability for intent, gross negligence, injury to life, body, or health, or mandatory consumer rights. For other claims, liability is limited to the extent permitted by applicable law.': 'Nichts in diesen Bedingungen schließt eine Haftung aus, die gesetzlich nicht ausgeschlossen werden kann, einschließlich Haftung für Vorsatz, grobe Fahrlässigkeit, Verletzung von Leben, Körper oder Gesundheit sowie zwingende Verbraucherrechte. Für andere Ansprüche ist die Haftung im gesetzlich zulässigen Umfang begrenzt.',
        'German law applies, without limiting mandatory protections or jurisdiction rights available to consumers in their country of residence.': 'Es gilt deutsches Recht, ohne zwingende Schutzvorschriften oder Gerichtsstandsrechte einzuschränken, die Verbrauchern in ihrem Wohnsitzland zustehen.',
        'Changes to these Terms': 'Änderungen dieser Bedingungen',
        'We may update these Terms as LunaEcho develops. The current version and effective date will remain published on this page. If a material change affects an available managed service, we will provide reasonable notice through the service or project website where practical.': 'Wir können diese Bedingungen mit der Weiterentwicklung von LunaEcho aktualisieren. Die aktuelle Fassung und das Gültigkeitsdatum bleiben auf dieser Seite veröffentlicht. Wenn eine wesentliche Änderung einen verfügbaren verwalteten Dienst betrifft, informieren wir soweit praktikabel angemessen über den Dienst oder die Projektwebsite.',
        '08 / Contact': '08 / Kontakt',
        'Questions are welcome.': 'Fragen sind willkommen.',
        'LunaEcho is operated by ShadowOkami in Germany. For questions about these Terms, service access, or a legal concern, contact:': 'LunaEcho wird von ShadowOkami in Deutschland betrieben. Bei Fragen zu diesen Bedingungen, zum Dienstzugang oder zu einem rechtlichen Anliegen kontaktiere:'
    };

    const privacy = {
        'LunaEcho Privacy Policy': 'LunaEcho-Datenschutzerklärung',
        'The official Privacy Policy for the LunaEcho Discord application and managed service.': 'Die offizielle Datenschutzerklärung für die LunaEcho-Discord-Anwendung und den verwalteten Dienst.',
        'How LunaEcho processes, protects, retains, and deletes Discord application data.': 'Wie LunaEcho Daten der Discord-Anwendung verarbeitet, schützt, aufbewahrt und löscht.',
        'Privacy navigation': 'Datenschutz-Navigation',
        'Privacy': 'Datenschutz',
        'Policy.': 'erklärung.',
        'This Policy explains what LunaEcho processes, why it is needed, how long it is kept, and how Discord users and server administrators can request deletion.': 'Diese Erklärung erläutert, was LunaEcho verarbeitet, warum dies erforderlich ist, wie lange Daten aufbewahrt werden und wie Discord-Nutzer sowie Serveradministratoren eine Löschung beantragen können.',
        'Privacy at a glance': 'Datenschutz auf einen Blick',
        'Privacy Policy contents': 'Inhalt der Datenschutzerklärung',
        'Scope': 'Geltungsbereich',
        'Controller': 'Verantwortlicher',
        'Data processed': 'Verarbeitete Daten',
        'Purposes': 'Zwecke',
        'Sharing': 'Weitergabe',
        'Retention': 'Aufbewahrung',
        'Self-hosting': 'Selbst-Hosting',
        '01 / Scope and current status': '01 / Geltungsbereich und aktueller Stand',
        'LunaEcho is currently in pre-release and is not accepting public servers. Features not yet enabled do not collect their planned feature data. This Policy will be reviewed as features and managed access become available.': 'LunaEcho befindet sich derzeit in der Vorabversion und nimmt keine öffentlichen Server an. Noch nicht aktivierte Funktionen erfassen ihre geplanten Funktionsdaten nicht. Diese Erklärung wird überprüft, sobald Funktionen und verwalteter Zugang verfügbar werden.',
        'Discord separately processes information under the': 'Discord verarbeitet Informationen separat gemäß der',
        'Discord Privacy Policy': 'Discord-Datenschutzerklärung',
        ". This Policy does not replace Discord's policy.": '. Diese Erklärung ersetzt nicht die Datenschutzerklärung von Discord.',
        '02 / Controller and contact': '02 / Verantwortlicher und Kontakt',
        'Who is responsible for managed-service data?': 'Wer ist für Daten des verwalteten Dienstes verantwortlich?',
        'Privacy contact': 'Datenschutzkontakt',
        '03 / Data we process': '03 / Daten, die wir verarbeiten',
        'Only data needed for enabled functions.': 'Nur Daten, die für aktivierte Funktionen erforderlich sind.',
        'Current pre-release operation': 'Aktueller Betrieb der Vorabversion',
        'During authorized testing, LunaEcho may process and record:': 'Während autorisierter Tests kann LunaEcho folgende Daten verarbeiten und protokollieren:',
        'Discord user ID, server (guild) ID, interaction ID, and command name.': 'Discord-Nutzer-ID, Server- beziehungsweise Guild-ID, Interaktions-ID und Befehlsname.',
        'Command options supplied to an enabled command when needed to perform the requested action.': 'Befehlsoptionen, die einem aktivierten Befehl übergeben werden, wenn sie für die angeforderte Aktion erforderlich sind.',
        'Command timing, success or failure, entitlement result, and technical error details.': 'Befehlsdauer, Erfolg oder Fehlschlag, Berechtigungsergebnis und technische Fehlerdetails.',
        'Basic bot startup information such as connected server count and the LunaEcho bot account ID.': 'Grundlegende Startinformationen des Bots, etwa die Anzahl verbundener Server und die Konto-ID des LunaEcho-Bots.',
        "The current application uses Discord's non-privileged Guilds intent. It does not receive Discord account passwords, authentication tokens, private direct-message history, or user IP addresses from Discord.": 'Die aktuelle Anwendung verwendet Discords nicht privilegierten Guilds-Intent. Sie erhält von Discord keine Kontopasswörter, Authentifizierungs-Tokens, privaten Direktnachrichtenverläufe oder IP-Adressen der Nutzer.',
        'Data used by planned features': 'Daten geplanter Funktionen',
        'When a feature becomes available and is enabled by a server administrator, LunaEcho may process the following feature-specific records:': 'Wenn eine Funktion verfügbar wird und von einem Serveradministrator aktiviert wird, kann LunaEcho folgende funktionsspezifische Datensätze verarbeiten:',
        'Server configuration:': 'Serverkonfiguration:',
        'Moderation:': 'Moderation:',
        'affected user ID, moderator ID, reason, action type, timestamps, and case references.': 'betroffene Nutzer-ID, Moderator-ID, Grund, Aktionstyp, Zeitstempel und Fallreferenzen.',
        'Tickets:': 'Tickets:',
        'ticket participants, channel identifiers, messages or transcripts intentionally included in a ticket, and ticket status.': 'Ticket-Teilnehmende, Kanalkennungen, absichtlich in ein Ticket aufgenommene Nachrichten oder Transkripte und Ticketstatus.',
        'Leveling and rewards:': 'Levelsystem und Belohnungen:',
        'user ID, activity-derived XP, rank, reward roles, and exclusions. Message content is not required merely to count eligible activity.': 'Nutzer-ID, aus Aktivität abgeleitete XP, Rang, Belohnungsrollen und Ausschlüsse. Nachrichteninhalte sind nicht erforderlich, nur um berechtigte Aktivität zu zählen.',
        'Temporary voice:': 'Temporäre Sprachkanäle:',
        'creator-hub, temporary-channel, owner, and permission identifiers needed to create and remove rooms.': 'Kennungen für Creator-Hub, temporären Kanal, Eigentümer und Berechtigungen, die zum Erstellen und Entfernen von Räumen erforderlich sind.',
        'Server logging:': 'Server-Protokollierung:',
        'selected Discord event metadata and identifiers for the event categories enabled by administrators.': 'ausgewählte Metadaten und Kennungen von Discord-Ereignissen für die von Administratoren aktivierten Ereigniskategorien.',
        'Music and automation:': 'Musik und Automatisierung:',
        'requested media metadata, queue state, automation rules, schedules, and execution results.': 'angeforderte Medienmetadaten, Warteschlangenstatus, Automatisierungsregeln, Zeitpläne und Ausführungsergebnisse.',
        'Website delivery data': 'Daten zur Website-Auslieferung',
        'When you visit the LunaEcho website, the server may process IP address, user agent, requested URL, response status, and timestamp to deliver the page, prevent abuse, and diagnose errors. The website does not intentionally use advertising trackers, analytics profiles, or marketing cookies.': 'Wenn du die LunaEcho-Website besuchst, kann der Server IP-Adresse, User-Agent, angeforderte URL, Antwortstatus und Zeitstempel verarbeiten, um die Seite auszuliefern, Missbrauch zu verhindern und Fehler zu diagnostizieren. Die Website verwendet bewusst keine Werbetracker, Analyseprofile oder Marketing-Cookies.',
        '04 / Why we process data': '04 / Warum wir Daten verarbeiten',
        'Operation, safety, support, and improvement.': 'Betrieb, Sicherheit, Support und Verbesserung.',
        'We process data to:': 'Wir verarbeiten Daten, um:',
        'Respond to Discord commands and provide features selected by server administrators.': 'auf Discord-Befehle zu reagieren und von Serveradministratoren ausgewählte Funktionen bereitzustellen.',
        'Prevent abuse, investigate errors, secure the service, and maintain reliability.': 'Missbrauch zu verhindern, Fehler zu untersuchen, den Dienst abzusichern und die Zuverlässigkeit aufrechtzuerhalten.',
        'Provide support, handle privacy requests, and communicate material service changes.': 'Support bereitzustellen, Datenschutzanfragen zu bearbeiten und wesentliche Dienständerungen zu kommunizieren.',
        'Meet legal obligations and enforce the': 'rechtliche Pflichten zu erfüllen und die',
        'LunaEcho Terms of Service': 'LunaEcho-Nutzungsbedingungen',
        'Where the GDPR applies, processing is based as appropriate on performing the requested service or taking steps before providing it, our legitimate interests in operating and securing LunaEcho, compliance with legal obligations, and consent where consent is specifically requested.': 'Soweit die DSGVO gilt, beruht die Verarbeitung je nach Fall auf der Erbringung des angeforderten Dienstes oder vorvertraglichen Maßnahmen, unseren berechtigten Interessen am Betrieb und an der Absicherung von LunaEcho, der Erfüllung rechtlicher Pflichten sowie auf einer Einwilligung, wenn diese ausdrücklich eingeholt wird.',
        '05 / Sharing and service providers': '05 / Weitergabe und Dienstleister',
        'We do not sell personal data.': 'Wir verkaufen keine personenbezogenen Daten.',
        'We may share or make data available only as needed to:': 'Wir geben Daten nur weiter oder machen sie verfügbar, soweit dies erforderlich ist für:',
        'Discord:': 'Discord:',
        "commands, responses, and app activity pass through Discord's platform.": 'Befehle, Antworten und App-Aktivitäten laufen über die Plattform von Discord.',
        'Infrastructure providers:': 'Infrastrukturanbieter:',
        'hosting, storage, backup, security, and email providers may process data under appropriate contractual and confidentiality obligations.': 'Hosting-, Speicher-, Backup-, Sicherheits- und E-Mail-Anbieter können Daten unter angemessenen vertraglichen und vertraulichkeitsbezogenen Pflichten verarbeiten.',
        'Payment providers:': 'Zahlungsanbieter:',
        'Authorities or affected parties:': 'Behörden oder betroffene Parteien:',
        'when required by law or reasonably necessary to protect users, rights, safety, or service security.': 'wenn dies gesetzlich vorgeschrieben oder vernünftigerweise erforderlich ist, um Nutzer, Rechte, Sicherheit oder die Dienstsicherheit zu schützen.',
        'LunaEcho does not sell personal data, build advertising profiles, or share Discord API data for targeted advertising.': 'LunaEcho verkauft keine personenbezogenen Daten, erstellt keine Werbeprofile und teilt keine Discord-API-Daten für zielgerichtete Werbung.',
        '06 / Retention and deletion': '06 / Aufbewahrung und Löschung',
        'Data is kept only for a defined purpose.': 'Daten werden nur für einen festgelegten Zweck aufbewahrt.',
        'Pre-release operational interaction and error logs are retained for up to 30 days, unless a longer period is needed to investigate a security incident or meet a legal obligation.': 'Betriebliche Interaktions- und Fehlerprotokolle der Vorabversion werden bis zu 30 Tage aufbewahrt, sofern kein längerer Zeitraum zur Untersuchung eines Sicherheitsvorfalls oder zur Erfüllung einer rechtlichen Pflicht erforderlich ist.',
        'Server configuration, active moderation records, progression data, and automation settings are retained while the feature is active. After LunaEcho is removed, managed-service records are deleted or anonymized within 30 days unless earlier deletion is requested or retention is legally required.': 'Serverkonfiguration, aktive Moderationsdatensätze, Fortschrittsdaten und Automatisierungseinstellungen werden aufbewahrt, solange die Funktion aktiv ist. Nach dem Entfernen von LunaEcho werden Datensätze des verwalteten Dienstes innerhalb von 30 Tagen gelöscht oder anonymisiert, sofern keine frühere Löschung beantragt wurde oder eine gesetzliche Aufbewahrungspflicht besteht.',
        'Website security logs are normally retained for up to 30 days.': 'Sicherheitsprotokolle der Website werden normalerweise bis zu 30 Tage aufbewahrt.',
        'Backups, if used, may retain deleted records for a limited recovery cycle and are protected from ordinary use until overwritten. Data may be retained longer only when necessary for legal claims, abuse prevention, or a binding legal obligation.': 'Backups können gelöschte Datensätze für einen begrenzten Wiederherstellungszyklus enthalten und sind bis zum Überschreiben vor gewöhnlicher Nutzung geschützt. Daten dürfen nur länger aufbewahrt werden, wenn dies für Rechtsansprüche, Missbrauchsprävention oder eine bindende rechtliche Pflicht erforderlich ist.',
        'Security and international processing': 'Sicherheit und internationale Verarbeitung',
        'Practical safeguards, without impossible promises.': 'Praktische Schutzmaßnahmen ohne unmögliche Versprechen.',
        "Discord and infrastructure providers may process data in countries outside your own. Where required, we rely on lawful transfer mechanisms and provider safeguards. Discord's own transfers are described in its privacy documentation.": 'Discord und Infrastrukturanbieter können Daten in Ländern außerhalb deines eigenen Landes verarbeiten. Soweit erforderlich, stützen wir uns auf rechtmäßige Übermittlungsmechanismen und Schutzmaßnahmen der Anbieter. Discord beschreibt seine eigenen Übermittlungen in seiner Datenschutzdokumentation.',
        '07 / Your rights and deletion requests': '07 / Deine Rechte und Löschanfragen',
        'You can ask about or delete your data.': 'Du kannst Auskunft oder die Löschung deiner Daten verlangen.',
        'Depending on applicable law, you may have rights to access, correct, delete, restrict, or receive a copy of personal data, and to object to certain processing or withdraw consent. You may also lodge a complaint with your local data-protection authority.': 'Je nach geltendem Recht kannst du Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung oder Erhalt einer Kopie personenbezogener Daten haben sowie bestimmten Verarbeitungen widersprechen oder eine Einwilligung widerrufen. Du kannst außerdem Beschwerde bei deiner zuständigen Datenschutzbehörde einlegen.',
        'How to submit a LunaEcho data request': 'So stellst du eine LunaEcho-Datenanfrage',
        'LunaEcho Data Request': 'LunaEcho-Datenanfrage',
        'Include your Discord User ID and, for server-level records, the relevant Server ID. Do not send your password or token.': 'Gib deine Discord-Nutzer-ID und bei serverbezogenen Datensätzen die betreffende Server-ID an. Sende niemals dein Passwort oder Token.',
        'State whether you want access, correction, deletion, restriction, or another privacy action.': 'Gib an, ob du Auskunft, Berichtigung, Löschung, Einschränkung oder eine andere Datenschutzmaßnahme wünschst.',
        'Complete a reasonable ownership or administrator verification if needed to protect other users and server data.': 'Führe bei Bedarf eine angemessene Eigentümer- oder Administratorprüfung durch, um andere Nutzer und Serverdaten zu schützen.',
        'Server owners and authorized administrators may request deletion of managed guild configuration and feature records. Individual users may request deletion of records linked to their Discord User ID where we control that data. We will respond within the timeframe required by applicable law and explain if a lawful exception applies.': 'Serverbesitzer und autorisierte Administratoren können die Löschung verwalteter Guild-Konfigurationen und Funktionsdatensätze beantragen. Einzelne Nutzer können die Löschung von Datensätzen verlangen, die mit ihrer Discord-Nutzer-ID verknüpft sind, soweit wir diese Daten kontrollieren. Wir antworten innerhalb der gesetzlich vorgeschriebenen Frist und erläutern, falls eine rechtmäßige Ausnahme gilt.',
        '08 / Self-hosted installations': '08 / Selbst gehostete Installationen',
        'The self-hosted operator controls its data.': 'Der selbst hostende Betreiber kontrolliert seine Daten.',
        'This Policy does not govern data processed only by an independent self-hosted LunaEcho installation. The person or organization running that installation decides its configuration, storage, retention, security, and legal basis and is responsible for providing its own privacy information where required.': 'Diese Erklärung gilt nicht für Daten, die ausschließlich von einer unabhängigen selbst gehosteten LunaEcho-Installation verarbeitet werden. Die Person oder Organisation, die diese Installation betreibt, entscheidet über Konfiguration, Speicherung, Aufbewahrung, Sicherheit und Rechtsgrundlage und ist dafür verantwortlich, soweit erforderlich eigene Datenschutzinformationen bereitzustellen.',
        'Children': 'Kinder',
        'LunaEcho is not directed to anyone below the minimum age required to use Discord in their country. If you believe data relating to an underage user has been processed, contact us so it can be reviewed and deleted where appropriate.': 'LunaEcho richtet sich nicht an Personen unter dem in ihrem Land für Discord geltenden Mindestalter. Wenn du glaubst, dass Daten eines minderjährigen Nutzers verarbeitet wurden, kontaktiere uns, damit diese geprüft und gegebenenfalls gelöscht werden können.',
        'Policy updates': 'Änderungen dieser Erklärung',
        'We may update this Policy as LunaEcho develops, providers change, or legal requirements evolve. The current version and effective date will remain available at this URL. Material changes affecting an available managed service will be communicated where practical.': 'Wir können diese Erklärung aktualisieren, wenn sich LunaEcho weiterentwickelt, Anbieter wechseln oder rechtliche Anforderungen ändern. Die aktuelle Fassung und das Gültigkeitsdatum bleiben unter dieser URL verfügbar. Wesentliche Änderungen, die einen verfügbaren verwalteten Dienst betreffen, werden soweit praktikabel kommuniziert.',
        '09 / Privacy contact': '09 / Datenschutzkontakt',
    };

    const redesign = {
        'Okami | Personal Projects & Experiments': 'Okami | Persönliche Projekte & Experimente',
        'DIGITAL WORKSHOP': 'DIGITALE WERKSTATT',
        'Okami is a hobby developer from Germany sharing personal Linux, Discord, automation, and tabletop projects built from curiosity and made public for everyone.': 'Okami ist ein Hobby-Entwickler aus Deutschland, der persönliche Projekte rund um Linux, Discord, Automatisierung und Tabletop teilt – aus Neugier gebaut und für alle veröffentlicht.',
        'Okami’s digital workshop: a hobby developer from Germany building Linux desktops, Discord bots, small automations and a whole D&D world.': 'Okamis digitale Werkstatt: ein Hobby-Entwickler aus Deutschland, der Linux-Desktops, Discord-Bots, kleine Automatisierungen und eine ganze D&D-Welt baut.',
        'Okami – welcome to my digital workshop': 'Okami – willkommen in meiner digitalen Werkstatt',
        'Building at my own pace': 'Ich entwickle in meinem eigenen Tempo',
        'Explore the projects': 'Projekte entdecken',
        'Different ideas.': 'Verschiedene Ideen.',
        'A public development shell around Hyprland, bringing panels, settings, session controls, and native tools into one connected desktop experience.': 'Eine öffentliche Entwicklungsversion einer Shell um Hyprland, die Panels, Einstellungen, Sitzungssteuerung und native Tools zu einem verbundenen Desktop-Erlebnis vereint.',
        'A modular, open-source Discord community platform with Self-Hosted, free Cloud, and managed Custom deployment paths.': 'Eine modulare Open-Source-Plattform für Discord-Communitys mit Self-Hosted, kostenlosem Cloud-Dienst und verwaltetem Custom-Betrieb.',
        'The Mirrored Realms is an open-source D&D 5.5e setting disguised as an Obsidian vault, where broken time, royal lies, and watchful reflections all lead somewhere deeper.': 'Die Spiegelreiche sind ein Open-Source-Setting für D&D 5.5e in Gestalt eines Obsidian-Vaults, in dem gebrochene Zeit, königliche Lügen und wachsame Spiegelbilder immer tiefer führen.',
        'Gaming and project videos': 'Gaming- und Projektvideos',
        'Gaming uploads alongside project previews, feature demos, and progress.': 'Gaming-Videos neben Projektvorschauen, Feature-Demos und Fortschritten.',
        'Public repositories': 'Öffentliche Repositories',
        'Browse the projects that already have source available.': 'Entdecke die Projekte, deren Quellcode bereits verfügbar ist.',
        'Streams for fun': 'Streams zum Spaß',
        'Gaming and relaxed streams, separate from the development work.': 'Gaming und entspannte Streams, getrennt von der Entwicklungsarbeit.',
        'Community and updates': 'Community und Updates',
        'Follow project updates, share feedback, or join the conversation.': 'Verfolge Projektupdates, teile Feedback oder komm ins Gespräch.',

        'Hyprland manages the windows. Voidline is building the shell around them: one connected place for the controls, panels, settings, and system moments that make a desktop feel complete.': 'Hyprland verwaltet die Fenster. Voidline entwickelt die Shell darum herum: einen verbundenen Ort für Bedienelemente, Panels, Einstellungen und Systemmomente, die ein Desktop-Erlebnis vollständig machen.',
        'The window manager stays.': 'Der Window-Manager bleibt.',
        'The shell fills the gaps.': 'Die Shell schließt die Lücken.',
        'Voidline is not a replacement for Hyprland. It is the connected desktop experience around it: bar, panels, settings, notifications, session controls, lock screen, and supporting tools.': 'Voidline ersetzt Hyprland nicht. Es ist das verbundene Desktop-Erlebnis darum herum: Leiste, Panels, Einstellungen, Benachrichtigungen, Sitzungssteuerung, Sperrbildschirm und unterstützende Tools.',
        'A desktop shell instead of a collection of unrelated parts.': 'Eine Desktop-Shell statt einer Sammlung unverbundener Teile.',
        'Voidline brings the everyday surfaces around Hyprland into one project, one interaction language, and one place to keep improving.': 'Voidline vereint die alltäglichen Oberflächen rund um Hyprland in einem Projekt, einer Interaktionssprache und einem Ort für kontinuierliche Verbesserungen.',
        'Built as a system.': 'Als System entwickelt.',
        'Not a pile of parts.': 'Nicht als Haufen einzelner Teile.',
        'The current development build connects its most visible surfaces through three layers: quick access, the wider system experience, and the native tools beneath both.': 'Die aktuelle Entwicklungsversion verbindet ihre sichtbarsten Oberflächen in drei Ebenen: Schnellzugriff, das umfassendere Systemerlebnis und die nativen Tools darunter.',
        'Settings that belong': 'Einstellungen, die',
        'to the same world.': 'zur selben Welt gehören.',
        'Navigation, controls, and system information follow the same visual rules as the rest of Voidline instead of feeling like a separate utility.': 'Navigation, Bedienelemente und Systeminformationen folgen denselben visuellen Regeln wie der Rest von Voidline, statt wie ein separates Tool zu wirken.',
        'Watch the shell': 'Sieh zu, wie die Shell',
        'come together.': 'zusammenwächst.',
        'The latest video shows the current working direction: connected desktop surfaces, everyday controls, and the experience taking shape around Hyprland.': 'Das neueste Video zeigt die aktuelle funktionierende Richtung: verbundene Desktop-Oberflächen, alltägliche Bedienelemente und das Erlebnis, das rund um Hyprland entsteht.',
        'Public to explore.': 'Öffentlich zum Entdecken.',
        'Still a development build.': 'Noch immer eine Entwicklungsversion.',
        'Try the direction.': 'Teste die Richtung.',
        'Help shape the shell.': 'Hilf, die Shell zu formen.',
        'Explore the source, test the development release, report what you find, or join the Discord community to follow the work.': 'Erkunde den Quellcode, teste die Entwicklungsversion, melde deine Funde oder verfolge die Arbeit in der Discord-Community.',


        'Eighteen doors.': 'Achtzehn Türen.',
        'No safe order.': 'Keine sichere Reihenfolge.',
        'The realm notices': 'Das Reich bemerkt,',
        'when you enter.': 'wenn du eintrittst.',
    };

    const lunaechoV01 = {
        'Open the dashboard ↗': 'Zum Dashboard ↗',
        '4 of 11 modules on': '4 von 11 Modulen aktiv',
        'Coming later': 'Kommt später',
        'Core modules with fair service limits': 'Kernmodule mit fairen Service-Limits',
        'Discord roles decide what the bot may do; dashboard roles decide what staff may change.': 'Discord-Rollen bestimmen, was der Bot darf; Dashboard-Rollen bestimmen, was das Team ändern darf.',
        'Easiest start': 'Einfachster Einstieg',
        'Encrypted at rest, never logged, never shown again.': 'Verschlüsselt gespeichert, nie geloggt, nie wieder angezeigt.',
        'Every major feature is its own module. Turn on what your server needs.': 'Jede große Funktion ist ein eigenes Modul. Schalte ein, was dein Server braucht.',
        'Full feature set, no artificial limits': 'Voller Funktionsumfang, keine künstlichen Limits',
        'Full functionality, no Cloud limits': 'Volle Funktionalität, keine Cloud-Limits',
        'Hosting and updates included': 'Hosting und Updates inklusive',
        'Illustrative preview · not the final dashboard': 'Beispielhafte Vorschau · nicht das finale Dashboard',
        'Invite the official bot. No server, no Docker, no token.': 'Lade den offiziellen Bot ein. Kein Server, kein Docker, kein Token.',
        'Managed hosting and support': 'Verwaltetes Hosting und Support',
        'Module settings': 'Moduleinstellungen',
        'Now': 'Jetzt',
        'One typed codebase for bot, API, dashboard and workers.': 'Eine typisierte Codebasis für Bot, API, Dashboard und Worker.',
        'Order, not dates. Billing comes last.': 'Reihenfolge statt Termine. Abrechnung kommt zuletzt.',
        'Prices and limits are set after real cost measurements, not before.': 'Preise und Limits werden nach echten Kostenmessungen festgelegt, nicht vorher.',
        'Pricing, limits and bigger features stay open until real usage backs them up.': 'Preise, Limits und größere Funktionen bleiben offen, bis echte Nutzung sie stützt.',
        'Public Terms and Privacy Policy for users, server admins and Discord’s app review.': 'Öffentliche Nutzungsbedingungen und Datenschutzerklärung für Nutzer, Server-Admins und Discords App-Prüfung.',
        'Run everything on your own hardware with your own bot.': 'Betreibe alles auf deiner eigenen Hardware mit deinem eigenen Bot.',
        'Same bot everywhere. Only who hosts it and whose bot identity it uses changes.': 'Überall derselbe Bot. Es ändert sich nur, wer ihn hostet und welche Bot-Identität er nutzt.',
        'Self-Hosted, Cloud and Custom are modes of one bot, not separate products.': 'Self-Hosted, Cloud und Custom sind Betriebsarten eines Bots, keine getrennten Produkte.',
        'Self-Hosted: docs and community. Cloud: best effort. Custom: managed support.': 'Self-Hosted: Doku und Community. Cloud: nach bestem Bemühen. Custom: verwalteter Support.',
        'Settings saved': 'Einstellungen gespeichert',
        'Shared official LunaEcho bot': 'Geteilter offizieller LunaEcho-Bot',
        'Source code and Cloud dashboard are online. Custom and final limits follow later.': 'Quellcode und Cloud-Dashboard sind online. Custom und finale Limits folgen später.',
        'Turning a module off stops it but keeps its settings.': 'Ein deaktiviertes Modul stoppt, behält aber seine Einstellungen.',
        'You handle setup, updates and backups': 'Du kümmerst dich um Einrichtung, Updates und Backups',
        'Your bot name, avatar and profile': 'Dein Botname, Avatar und Profil',
        'Your data, branding and bot identity': 'Deine Daten, dein Branding und deine Bot-Identität',
        'Your own bot identity, run and maintained by LunaEcho.': 'Deine eigene Bot-Identität, betrieben und gewartet von LunaEcho.',
        'Your server · Modules': 'Dein Server · Module',
        'Open the Cloud dashboard ↗': 'Zum Cloud-Dashboard ↗',
        'View on GitHub ↗': 'Auf GitHub ansehen ↗',
        'Get the source ↗': 'Zum Quellcode ↗',
        'Built in the open.': 'Öffentlich entwickelt.',
        'LunaEcho | Modular Open-Source Discord Platform': 'LunaEcho | Modulare Open-Source-Discord-Plattform',
        'LunaEcho is a planned modular, all-in-one, open-source Discord community platform available as Self-Hosted, Cloud, or Custom.': 'LunaEcho ist eine geplante modulare All-in-One-Open-Source-Plattform für Discord-Communitys, verfügbar als Self-Hosted, Cloud oder Custom.',
        'One bot. Every community tool. Your way. Explore LunaEcho Self-Hosted, Cloud, and Custom.': 'Ein Bot. Jedes Community-Werkzeug. Auf deine Weise. Entdecke LunaEcho Self-Hosted, Cloud und Custom.',
        'Hosting': 'Hosting',
        'Modules': 'Module',
        'Architecture': 'Architektur',
        'Product plan v0.1 / Pre-release': 'Produktplan v0.1 / Vorabversion',
        'One bot. Every community tool. Your way.': 'Ein Bot. Jedes Community-Werkzeug. Auf deine Weise.',
        'A modular, all-in-one, open-source Discord community platform. Enable only the tools your server needs, host it yourself, or let LunaEcho handle the infrastructure.': 'Eine modulare All-in-One-Open-Source-Plattform für Discord-Communitys. Aktiviere nur die Werkzeuge, die dein Server benötigt, hoste sie selbst oder überlasse LunaEcho die Infrastruktur.',
        'Open source first': 'Open Source zuerst',
        'Modular by design': 'Von Grund auf modular',
        'One shared codebase': 'Eine gemeinsame Codebasis',
        'Ways to run LunaEcho': 'Arten, LunaEcho zu betreiben',
        'Planned version 1 modules': 'Geplante Module für Version 1',
        'Shared modular codebase': 'Gemeinsame modulare Codebasis',
        'Three ways to run it': 'Drei Arten des Betriebs',
        'Same LunaEcho.': 'Dasselbe LunaEcho.',
        'Different responsibility.': 'Andere Verantwortung.',
        'LunaEcho deployment options': 'LunaEcho-Betriebsmodelle',
        'Self-Hosted': 'Self-Hosted',
        'Cloud': 'Cloud',
        'Custom': 'Custom',
        'Free': 'Kostenlos',
        'Luna': 'Luna',
        'Echo': 'Echo',
        'LunaEcho': 'LunaEcho',
        'OKAMI': 'OKAMI',
        'WIP': 'WIP',
        'Roles': 'Rollen',
        'Logs': 'Protokolle',
        'Tickets': 'Tickets',
        'SELF_HOSTED': 'SELF_HOSTED',
        'CLOUD_SHARED': 'CLOUD_SHARED',
        'CLOUD_CUSTOM': 'CLOUD_CUSTOM',
        'Self-Hosted architecture': 'Self-Hosted-Architektur',
        'Cloud architecture': 'Cloud-Architektur',
        'Custom architecture': 'Custom-Architektur',
        'LunaEcho runtime modes': 'LunaEcho-Betriebsmodi',
        'Free, always': 'Immer kostenlos',
        'Open source': 'Open Source',
        'Your hardware': 'Deine Hardware',
        'Your bot': 'Dein Bot',
        'Your server': 'Dein Server',
        'Best for': 'Am besten für',
        'Technical users who want full control': 'Technische Nutzer, die volle Kontrolle möchten',
        'Invite and start': 'Einladen und starten',
        'LunaEcho hardware': 'LunaEcho-Hardware',
        'LunaEcho bot': 'LunaEcho-Bot',
        'Most small communities': 'Die meisten kleinen Communitys',
        'Paid / size-based': 'Kostenpflichtig / nach Größe',
        'Your bot, managed by us': 'Dein Bot, von uns verwaltet',
        'Established communities wanting their own identity': 'Etablierte Communitys, die ihre eigene Identität möchten',
        'What actually changes?': 'Was ändert sich wirklich?',
        'Decision': 'Entscheidung',
        'Price': 'Preis',
        'Paid, based on server size': 'Kostenpflichtig, abhängig von der Servergröße',
        'Hosted by': 'Gehostet von',
        'You': 'Du',
        'Bot application': 'Bot-Anwendung',
        'Yours': 'Deine',
        "LunaEcho's": 'LunaEchos',
        'Bot token': 'Bot-Token',
        'Feature restrictions': 'Funktionseinschränkungen',
        'None*': 'Keine*',
        'Reasonable service limits': 'Angemessene Dienstlimits',
        'No normal Cloud restrictions*': 'Keine normalen Cloud-Einschränkungen*',
        'Updates & maintenance': 'Updates & Wartung',
        'Branding': 'Branding',
        '* Subject to technical, Discord API, third-party API, and fair-use constraints rather than artificial feature locks.': '* Es gelten technische Grenzen, Discord-API- und Drittanbieter-API-Limits sowie Fair-Use-Regeln anstelle künstlicher Funktionssperren.',
        'Intentionally undecided': 'Bewusst noch offen',
        'No made-up prices or limits.': 'Keine erfundenen Preise oder Limits.',
        'Version 1 modules': 'Module für Version 1',
        'Enable what matters.': 'Aktiviere, was wichtig ist.',
        'Leave the rest quiet.': 'Lass den Rest ruhig.',
        'Moderation & Safety': 'Moderation & Sicherheit',
        'Warnings, timeouts, kicks, bans, cleanup, moderation cases, AutoMod, and anti-spam.': 'Verwarnungen, Timeouts, Kicks, Bans, Bereinigung, Moderationsfälle, AutoMod und Anti-Spam.',
        'Welcome & Onboarding': 'Begrüßung & Onboarding',
        'Welcome and goodbye messages, autoroles, verification, and onboarding flows.': 'Begrüßungs- und Abschiedsnachrichten, automatische Rollen, Verifizierung und Onboarding-Abläufe.',
        'Reaction, button, select, persistent, and self-service role menus.': 'Reaktions-, Button-, Auswahl-, dauerhafte und selbst bedienbare Rollenmenüs.',
        'Support & Tickets': 'Support & Tickets',
        'Panels, categories, staff assignment, transcripts, claims, and ticket logs.': 'Panels, Kategorien, Teamzuweisung, Transkripte, Übernahme und Ticket-Protokolle.',
        'Levels & Rewards': 'Level & Belohnungen',
        'XP, ranks, leaderboards, rewards, voice XP, and exclusions.': 'XP, Ränge, Bestenlisten, Belohnungen, Sprach-XP und Ausschlüsse.',
        'Voice Rooms': 'Sprachräume',
        'Join-to-create rooms, ownership, limits, locking, names, and permissions.': 'Beitritt-zum-Erstellen-Räume, Besitz, Limits, Sperren, Namen und Berechtigungen.',
        'Moderation, member, message, channel, role, voice, and configuration events.': 'Moderations-, Mitglieder-, Nachrichten-, Kanal-, Rollen-, Sprach- und Konfigurationsereignisse.',
        'Playback, queues, permissions, playlists, and voice controls.': 'Wiedergabe, Warteschlangen, Berechtigungen, Playlists und Sprachsteuerung.',
        'Flexible trigger, condition, and action workflows.': 'Flexible Abläufe aus Auslösern, Bedingungen und Aktionen.',
        'Social Notifications': 'Social-Benachrichtigungen',
        'YouTube, Twitch, and potentially other service notifications.': 'Benachrichtigungen für YouTube, Twitch und möglicherweise weitere Dienste.',
        'Utilities': 'Werkzeuge',
        'Server and user information, polls, reminders, and general Discord tools.': 'Server- und Nutzerinformationen, Umfragen, Erinnerungen und allgemeine Discord-Werkzeuge.',
        'Built to expand': 'Zum Erweitern gebaut',
        'New modules can be added later without turning LunaEcho into separate bots.': 'Neue Module können später ergänzt werden, ohne LunaEcho in getrennte Bots aufzuteilen.',
        'Configuration stays yours.': 'Die Konfiguration bleibt erhalten.',
        'Platform foundation': 'Plattformfundament',
        'One codebase.': 'Eine Codebasis.',
        'Three runtime modes.': 'Drei Betriebsmodi.',
        'Planned foundation': 'Geplantes Fundament',
        'TypeScript throughout': 'Durchgehend TypeScript',
        'Custom token security': 'Sicherheit von Custom-Tokens',
        'A bot token is a password.': 'Ein Bot-Token ist ein Passwort.',
        'Two permission layers': 'Zwei Berechtigungsebenen',
        'Discord access is not billing access.': 'Discord-Zugriff ist kein Abrechnungszugriff.',
        'Support boundaries': 'Support-Grenzen',
        'Responsibility follows hosting.': 'Verantwortung folgt dem Hosting.',
        'Planned Custom onboarding': 'Geplantes Custom-Onboarding',
        'From product choice to your own managed bot.': 'Von der Produktauswahl zum eigenen verwalteten Bot.',
        'Choose Custom': 'Custom wählen',
        'Sign in with Discord': 'Mit Discord anmelden',
        'Select your server': 'Deinen Server auswählen',
        'Create an application': 'Eine Anwendung erstellen',
        'Submit and verify the bot token': 'Bot-Token übermitteln und prüfen',
        'Invite your custom bot': 'Deinen eigenen Bot einladen',
        'Configure modules': 'Module konfigurieren',
        'Start the managed instance': 'Verwaltete Instanz starten',
        'Development roadmap': 'Entwicklungsfahrplan',
        'Build the platform.': 'Die Plattform bauen.',
        'Validate before selling.': 'Vor dem Verkauf validieren.',
        'Phases 0-4': 'Phasen 0-4',
        'Foundation': 'Fundament',
        'Specify and build': 'Planen und bauen',
        '0 / Specification': '0 / Spezifikation',
        '1 / Core platform': '1 / Kernplattform',
        '2 / Moderation and logging': '2 / Moderation und Protokollierung',
        '3 / Roles, onboarding, and tickets': '3 / Rollen, Onboarding und Tickets',
        '4 / Levels and voice rooms': '4 / Level und Sprachräume',
        'Phases 5-7': 'Phasen 5-7',
        'Product': 'Produkt',
        'Connect the experience': 'Das Erlebnis verbinden',
        '5 / Dashboard': '5 / Dashboard',
        '6 / Automation engine': '6 / Automatisierungs-Engine',
        '7 / Isolated music service': '7 / Isolierter Musikdienst',
        'Phases 8-10': 'Phasen 8-10',
        'Release paths': 'Veröffentlichungswege',
        'Test every deployment': 'Jede Betriebsart testen',
        '8 / Self-Hosted Alpha': '8 / Self-Hosted Alpha',
        '9 / Cloud Alpha': '9 / Cloud Alpha',
        '10 / Custom Alpha': '10 / Custom Alpha',
        'Phases 11-12': 'Phasen 11-12',
        'Validation': 'Validierung',
        'Earn version 1.0': 'Version 1.0 verdienen',
        '11 / Public Beta': '11 / Öffentliche Beta',
        '12 / Stable public release': '12 / Stabile öffentliche Version',
        'Semantic versioning from 0.1.0 onward': 'Semantische Versionierung ab 0.1.0',
        'Not locked yet': 'Noch nicht festgelegt',
        'Measure first. Decide second.': 'Erst messen. Dann entscheiden.',
        'Effective 27 August 2026': 'Gültig ab 27. August 2026',
        'Acceptable use, deployment responsibilities, service availability, and pre-release conditions.': 'Zulässige Nutzung, Betriebsverantwortung, Dienstverfügbarkeit und Bedingungen der Vorabversion.',
        'Data categories, token safeguards, retention, service providers, security, and deletion requests.': 'Datenkategorien, Token-Schutz, Aufbewahrung, Dienstleister, Sicherheit und Löschanfragen.',
        'Pre-release product plan v0.1': 'Produktplan v0.1 / Vorabversion',
        'Open source first.': 'Open Source zuerst.',
    };

    const lunaLegalV01 = {
        'LUNAECHO': 'LUNAECHO',
        'SHADOWOKAMI': 'SHADOWOKAMI',
        '27 August 2026': '27. August 2026',
        'LunaEcho is currently in pre-release. Public Self-Hosted, Cloud, and Custom access is not yet offered. Product names, operational limits, prices, and features shown on the project page describe the current direction and may be updated before launch.': 'LunaEcho befindet sich derzeit in der Vorabversion. Öffentlicher Self-Hosted-, Cloud- und Custom-Zugang wird noch nicht angeboten. Produktnamen, betriebliche Limits, Preise und Funktionen auf der Projektseite beschreiben die aktuelle Richtung und können vor dem Start geändert werden.',
        'Collect, expose, or request passwords, user authentication tokens, financial data, health data, or other sensitive information through LunaEcho. An authorized administrator may submit a Discord bot token only through the dedicated LunaEcho Custom setup flow when that service becomes available.': 'Über LunaEcho Passwörter, Nutzer-Authentifizierungs-Tokens, Finanzdaten, Gesundheitsdaten oder andere sensible Informationen sammeln, offenlegen oder anfordern. Ein autorisierter Administrator darf ein Discord-Bot-Token nur über den dafür vorgesehenen LunaEcho-Custom-Einrichtungsablauf übermitteln, sobald dieser Dienst verfügbar ist.',
        'These Terms of Service ("Terms") are an agreement between you and ShadowOkami, the publisher of LunaEcho and operator of LunaEcho Cloud and Custom ("LunaEcho", "we", "us", or "our"). They apply when you install, access, test, or use LunaEcho.': 'Diese Nutzungsbedingungen ("Bedingungen") sind eine Vereinbarung zwischen dir und ShadowOkami, dem Herausgeber von LunaEcho und Betreiber von LunaEcho Cloud und Custom ("LunaEcho", "wir", "uns" oder "unser"). Sie gelten, wenn du LunaEcho installierst, darauf zugreifst, es testest oder nutzt.',
        'Attempt to bypass service limits, access controls, rate limits, or security measures.': 'Versuchen, Dienstlimits, Zugriffskontrollen, Ratenlimits oder Sicherheitsmaßnahmen zu umgehen.',
        'Never send Discord passwords, bot tokens, backup codes, or other authentication secrets by email or support message. Custom bot tokens belong only in the dedicated secure setup flow.': 'Sende niemals Discord-Passwörter, Bot-Tokens, Backup-Codes oder andere Authentifizierungsgeheimnisse per E-Mail oder Support-Nachricht. Custom-Bot-Tokens gehören ausschließlich in den dafür vorgesehenen sicheren Einrichtungsablauf.',
        '05 / Self-Hosted, Cloud, and Custom': '05 / Self-Hosted, Cloud und Custom',
        'LunaEcho Cloud': 'LunaEcho Cloud',
        "Cloud is the planned free shared service using LunaEcho's infrastructure and official bot identity. We will operate the service and may apply reasonable operational, storage, or fair-use limits. Final limits will be published before public access.": 'Cloud ist der geplante kostenlose gemeinsame Dienst mit LunaEchos Infrastruktur und offizieller Bot-Identität. Wir betreiben den Dienst und können angemessene Betriebs-, Speicher- oder Fair-Use-Limits anwenden. Endgültige Limits werden vor dem öffentlichen Zugang veröffentlicht.',
        'LunaEcho Custom': 'LunaEcho Custom',
        'Custom is the planned paid managed service using a Discord application and bot identity supplied by an authorized customer. We will operate the LunaEcho infrastructure while the customer remains responsible for their Discord application and authority to provide its bot token. Price, billing cycle, cancellation, and refund information will be shown before purchase. No paid Custom service is available at the date of these Terms.': 'Custom ist der geplante kostenpflichtige verwaltete Dienst mit einer Discord-Anwendung und Bot-Identität eines autorisierten Kunden. Wir betreiben die LunaEcho-Infrastruktur, während der Kunde für seine Discord-Anwendung und die Berechtigung zur Bereitstellung des Bot-Tokens verantwortlich bleibt. Preis, Abrechnungszeitraum, Kündigung und Erstattungsinformationen werden vor dem Kauf angezeigt. Zum Datum dieser Bedingungen ist kein kostenpflichtiger Custom-Dienst verfügbar.',
        'This Policy covers LunaEcho Cloud, Custom, and its website.': 'Diese Erklärung gilt für LunaEcho Cloud, Custom und die Website.',
        'LunaEcho does not sell personal data, run targeted advertising, or ask for Discord account passwords or user tokens. During pre-release testing, it processes only the Discord identifiers, interaction details, and technical logs needed to operate and secure the test service. A Custom bot token will be accepted only through the dedicated secure setup flow when that service becomes available.': 'LunaEcho verkauft keine personenbezogenen Daten, betreibt keine zielgerichtete Werbung und fragt nicht nach Discord-Kontopasswörtern oder Nutzer-Tokens. Während der Tests der Vorabversion werden nur die Discord-Kennungen, Interaktionsdetails und technischen Protokolle verarbeitet, die zum Betrieb und zur Absicherung des Testdienstes erforderlich sind. Ein Custom-Bot-Token wird erst bei Verfügbarkeit dieses Dienstes und ausschließlich über den dafür vorgesehenen sicheren Einrichtungsablauf angenommen.',
        'This Privacy Policy applies to the LunaEcho Discord application operated by ShadowOkami, authorized pre-release testing, future LunaEcho Cloud and Custom services, and the LunaEcho pages on shadowokami.com.': 'Diese Datenschutzerklärung gilt für die von ShadowOkami betriebene LunaEcho-Discord-Anwendung, autorisierte Tests der Vorabversion, zukünftige LunaEcho-Cloud- und Custom-Dienste sowie die LunaEcho-Seiten auf shadowokami.com.',
        'ShadowOkami, based in Germany, is the operator and data controller for personal data processed by LunaEcho Cloud, LunaEcho Custom, and the LunaEcho website.': 'ShadowOkami mit Sitz in Deutschland ist Betreiber und Verantwortlicher für personenbezogene Daten, die durch LunaEcho Cloud, LunaEcho Custom und die LunaEcho-Website verarbeitet werden.',
        'Custom bot credentials': 'Custom-Bot-Zugangsdaten',
        'When LunaEcho Custom becomes available, an authorized administrator will submit the bot token for a Discord application they control through a dedicated setup flow. The token will be treated as an authentication secret: encrypted at rest, excluded from application logs, analytics, support tickets, and normal database exports, and never returned to the browser after submission. It will be decrypted only by the service that needs to establish the Discord connection.': 'Sobald LunaEcho Custom verfügbar ist, übermittelt ein autorisierter Administrator das Bot-Token einer von ihm kontrollierten Discord-Anwendung über einen dafür vorgesehenen Einrichtungsablauf. Das Token wird als Authentifizierungsgeheimnis behandelt: verschlüsselt gespeichert, aus Anwendungsprotokollen, Analysen, Support-Tickets und normalen Datenbankexporten ausgeschlossen und nach der Übermittlung niemals an den Browser zurückgegeben. Es wird nur von dem Dienst entschlüsselt, der die Discord-Verbindung herstellen muss.',
        'LunaEcho is not intended for sensitive personal data. Do not submit passwords, user tokens, payment card details, health data, government identifiers, or other confidential information through bot commands, tickets, or ordinary configuration fields. A Custom bot token may be submitted only through the dedicated secure setup flow by an authorized administrator.': 'LunaEcho ist nicht für sensible personenbezogene Daten vorgesehen. Übermittle keine Passwörter, Nutzer-Tokens, Zahlungskartendaten, Gesundheitsdaten, amtlichen Kennungen oder andere vertrauliche Informationen über Bot-Befehle, Tickets oder gewöhnliche Konfigurationsfelder. Ein Custom-Bot-Token darf nur von einem autorisierten Administrator über den dafür vorgesehenen sicheren Einrichtungsablauf übermittelt werden.',
        'Cloud and Custom log-retention periods are not yet final. The applicable periods and administrator controls will be published before those services launch.': 'Die Aufbewahrungsfristen für Cloud- und Custom-Protokolle sind noch nicht endgültig. Die geltenden Zeiträume und Administrator-Einstellungen werden vor dem Start dieser Dienste veröffentlicht.',
        'Ticket-transcript retention will follow the selected managed service, configured administrator controls, operational needs, and published limits.': 'Die Aufbewahrung von Ticket-Transkripten richtet sich nach dem gewählten verwalteten Dienst, konfigurierten Administrator-Einstellungen, betrieblichen Anforderungen und veröffentlichten Limits.',
        "Custom bot tokens are retained only while needed to operate the customer's managed bot, subject to protected backup and recovery cycles, and are removed when replaced or when the Custom deployment ends unless retention is legally required.": 'Custom-Bot-Tokens werden nur so lange aufbewahrt, wie sie zum Betrieb des verwalteten Kunden-Bots benötigt werden, vorbehaltlich geschützter Backup- und Wiederherstellungszyklen. Sie werden beim Ersetzen oder am Ende des Custom-Betriebs entfernt, sofern keine gesetzliche Aufbewahrung erforderlich ist.',
        'We use measures appropriate to the service stage, including encrypted secret storage, restricted credential access, secret redaction in structured logs, least-privilege Discord access, access controls, updates, and encrypted HTTPS connections for the website. No online system can guarantee absolute security.': 'Wir verwenden dem Entwicklungsstand angemessene Maßnahmen, darunter verschlüsselte Speicherung von Geheimnissen, eingeschränkten Zugang zu Anmeldedaten, Entfernung von Geheimnissen aus strukturierten Protokollen, Discord-Zugriff nach dem Prinzip der geringsten Rechte, Zugriffskontrollen, Updates und verschlüsselte HTTPS-Verbindungen für die Website. Kein Onlinesystem kann absolute Sicherheit garantieren.',
        'If you are unsure whether you use Self-Hosted, Cloud, or Custom LunaEcho, ask the administrator of the Discord server where the app is installed.': 'Wenn du nicht sicher bist, ob du LunaEcho Self-Hosted, Cloud oder Custom nutzt, frage den Administrator des Discord-Servers, auf dem die App installiert ist.',
        'For privacy questions, data requests, or concerns about how LunaEcho Cloud or Custom processes information, contact ShadowOkami:': 'Bei Datenschutzfragen, Datenanfragen oder Bedenken zur Informationsverarbeitung durch LunaEcho Cloud oder Custom kontaktiere ShadowOkami:',
        'server, channel, role, and permission identifiers; selected settings; language; deployment type; and enabled modules.': 'Server-, Kanal-, Rollen- und Berechtigungskennungen; ausgewählte Einstellungen; Sprache; Betriebsart und aktivierte Module.',
        'Apply permissions, deployment capabilities, service limits, and server configuration.': 'Berechtigungen, Betriebsfunktionen, Dienstlimits und Serverkonfiguration anzuwenden.',
        'if LunaEcho Custom launches, a disclosed payment provider may process billing details. LunaEcho will not store full payment card numbers.': 'wenn LunaEcho Custom startet, kann ein offengelegter Zahlungsanbieter Abrechnungsdaten verarbeiten. LunaEcho speichert keine vollständigen Zahlungskartennummern.'
    };

    const notFound = {
        'Page Not Found | Okami': 'Seite nicht gefunden | Okami',
        'This path does not lead anywhere, but the Okami projects are still close by.': 'Dieser Pfad führt nirgendwohin, aber die Okami-Projekte sind weiterhin ganz in der Nähe.',
        'LOST SIGNAL': 'SIGNAL VERLOREN',
        'Home': 'Startseite',
        'Projects': 'Projekte',
        'ERROR / 404': 'FEHLER / 404',
        'This path': 'Dieser Pfad',
        'fades here.': 'verblasst hier.',
        'The page may have moved, changed its name, or never existed. Nothing is broken on your side. Choose a known path and we will get you back.': 'Die Seite wurde möglicherweise verschoben, umbenannt oder hat nie existiert. Auf deiner Seite ist nichts kaputt. Wähle einen bekannten Pfad und wir bringen dich zurück.',
        'Return home': 'Zur Startseite',
        'Explore the projects': 'Projekte entdecken',
        'A broken portal displaying error 404': 'Ein zerbrochenes Portal mit dem Fehler 404',
        'NO SIGNAL': 'KEIN SIGNAL',
        'KNOWN PATHS': 'BEKANNTE PFADE',
        'Pick another door.': 'Wähle eine andere Tür.',
        'A connected Hyprland desktop experience.': 'Ein verbundenes Desktop-Erlebnis für Hyprland.',
        'A modular open-source Discord platform.': 'Eine modulare Open-Source-Plattform für Discord.',
        'An open-source D&D 5.5e world setting.': 'Ein Open-Source-Weltsetting für D&D 5.5e.',
        'Open project →': 'Projekt öffnen →',
        'THE SIGNAL ENDS / THE PROJECTS CONTINUE': 'DAS SIGNAL ENDET / DIE PROJEKTE GEHEN WEITER',
        'Return home ↑': 'Zur Startseite ↑'
    };

    const mirrorgateTerms = {
        '. The SRD 5.2.1 is licensed under the Creative Commons Attribution 4.0 International License, available at': '. Das SRD 5.2.1 steht unter der Creative Commons Namensnennung 4.0 International Lizenz, abrufbar unter',
        '← Back to The Mirrored Realms': '← Zurück zu den Spiegelreichen',
        'Back to The Mirrored Realms': 'Zurück zu den Spiegelreichen',
        '01 / Scope': '01 / Geltungsbereich',
        '02 / Licence': '02 / Lizenz',
        '03 / Attribution': '03 / Namensnennung',
        '04 / System Reference Document 5.2.1': '04 / System Reference Document 5.2.1',
        '05 / Independence and names': '05 / Unabhängigkeit und Namen',
        '06 / Third-party material': '06 / Material Dritter',
        '07 / Contributions': '07 / Beiträge',
        '08 / Artwork': '08 / Artwork',
        '09 / At your table': '09 / An deinem Tisch',
        '10 / Early development': '10 / Frühe Entwicklung',
        '11 / Contact and changes': '11 / Kontakt und Änderungen',
        '24 October 2026': '24. Oktober 2026',
        'A ready-to-use attribution statement:': 'Eine fertige Namensnennung zum Übernehmen:',
        'Accepting a contribution is at the project’s discretion; accepted material may be edited to fit the setting.': 'Ob ein Beitrag aufgenommen wird, entscheidet das Projekt; aufgenommenes Material kann angepasst werden, damit es ins Setting passt.',
        'Artwork': 'Artwork',
        'At your table': 'An deinem Tisch',
        'Attribution': 'Namensnennung',
        'attribution.': 'Namensnennung.',
        'CC BY 4.0 covers the material, not names or logos. You may name The Mirrored Realms to credit it and to say that your work is based on it or compatible with it. Do not present your own work as an official Mirrored Realms release, and do not suggest that Okami endorses it.': 'CC BY 4.0 umfasst das Material, nicht Namen oder Logos. Du darfst The Mirrored Realms nennen, um das Projekt zu würdigen und zu sagen, dass dein Werk darauf basiert oder damit kompatibel ist. Gib dein eigenes Werk nicht als offizielle Veröffentlichung der Spiegelreiche aus und erwecke nicht den Eindruck, dass Okami es unterstützt.',
        'CC BY 4.0 for original material.': 'CC BY 4.0 für eigenes Material.',
        'Compatible, not official.': 'Kompatibel, nicht offiziell.',
        'Contributions': 'Beiträge',
        'Corrections, playtest reports, writing, mechanics, and artwork are welcome through GitHub issues and pull requests. By contributing original material, you agree to make it available under CC BY 4.0. You keep your authorship and are credited for accepted work.': 'Korrekturen, Playtest-Berichte, Texte, Mechaniken und Artwork sind über GitHub-Issues und Pull Requests willkommen. Wenn du eigenes Material beiträgst, stellst du es unter CC BY 4.0 bereit. Du bleibst Urheber und wirst für aufgenommene Beiträge genannt.',
        'Credit in one line.': 'Namensnennung in einer Zeile.',
        'Crediting individual contributors, where their work is identified, is appreciated.': 'Es wird geschätzt, einzelne Mitwirkende zu nennen, wo ihre Arbeit erkennbar ist.',
        'Do not submit protected text, artwork, characters, or settings from games and fictional universes you do not control.': 'Reiche keine geschützten Texte, Bilder, Figuren oder Settings aus Spielen und fiktiven Welten ein, über die du keine Rechte hast.',
        'Early development': 'Frühe Entwicklung',
        'Every accepted work credits its artist, with the credit and links the artist chooses.': 'Jedes aufgenommene Werk nennt seine Künstlerin oder seinen Künstler – mit der Nennung und den Links, die sie selbst wählen.',
        'Except where stated otherwise, original material created for The Mirrored Realms may be copied, adapted, redistributed, published, and used commercially, as long as you give appropriate credit.': 'Soweit nicht anders angegeben, darf eigenes Material der Spiegelreiche kopiert, bearbeitet, weitergegeben, veröffentlicht und kommerziell genutzt werden, solange du es angemessen nennst.',
        'Files supplied by Obsidian plugins, themes, or other third-party tools are not authored by The Mirrored Realms contributors and are not relicensed under the project licence. Their original licences and copyright notices continue to apply. This includes the Atlas VTT plugin by Fabian Urbanek (ByteMirror), licensed under the GNU Affero General Public License, and any artwork it supplies, such as its starter tokens.': 'Dateien aus Obsidian-Plugins, Themes oder anderen Werkzeugen Dritter stammen nicht von den Mitwirkenden der Spiegelreiche und werden nicht unter die Projektlizenz gestellt. Ihre ursprünglichen Lizenzen und Urheberrechtshinweise gelten weiter. Dazu gehört das Plugin Atlas VTT von Fabian Urbanek (ByteMirror), lizenziert unter der GNU Affero General Public License, samt aller Grafiken, die es mitbringt, etwa seinen Starter-Tokens.',
        'For questions about these terms, permissions, or attribution, open an issue on': 'Bei Fragen zu diesen Bedingungen, zu Erlaubnissen oder zur Namensnennung öffne ein Issue auf',
        'How you may use, change, and share The Mirrored Realms, and how to credit it.': 'Wie du die Spiegelreiche nutzen, verändern und teilen darfst – und wie du sie nennst.',
        'If you did not change the material, leave out “Changes were made.”': 'Wenn du das Material nicht verändert hast, lass „Es wurden Änderungen vorgenommen.“ weg.',
        'Independence': 'Unabhängigkeit',
        'Licence': 'Lizenz',
        'Made by people, credited by name.': 'Von Menschen gemacht, mit Namen genannt.',
        'Material from the System Reference Document 5.2.1: CC BY 4.0, by Wizards of the Coast LLC.': 'Material aus dem System Reference Document 5.2.1: CC BY 4.0, von Wizards of the Coast LLC.',
        'MIRRORED REALMS / TERMS': 'SPIEGELREICHE / BEDINGUNGEN',
        'Music': 'Musik',
        'No warranty': 'Keine Gewähr',
        'Obsidian plugins and themes in the vault: their own licences; Atlas VTT is licensed under the GNU AGPL.': 'Obsidian-Plugins und Themes im Vault: ihre eigenen Lizenzen; Atlas VTT steht unter der GNU AGPL.',
        'or write to': 'oder schreib an',
        'Original Mirrored Realms material (text, rules, maps, and contributed artwork): CC BY 4.0.': 'Eigenes Material der Spiegelreiche (Texte, Regeln, Karten und beigetragenes Artwork): CC BY 4.0.',
        'Other people’s work keeps its own terms.': 'Die Arbeit anderer behält ihre eigenen Bedingungen.',
        'Paid commissions are agreed in writing before any work begins: scope, schedule, price, attribution, and usage rights.': 'Bezahlte Aufträge werden vor Arbeitsbeginn schriftlich vereinbart: Umfang, Zeitplan, Preis, Namensnennung und Nutzungsrechte.',
        'Payment never removes the artist’s right to be credited.': 'Eine Bezahlung hebt das Recht auf Namensnennung nie auf.',
        'Plain-language summary': 'Kurz und verständlich',
        'Play it, stream it, change it.': 'Spiel es, streame es, verändere es.',
        'Project status': 'Projektstatus',
        'Questions are welcome.': 'Fragen sind willkommen.',
        'Recommended music: not included; all rights remain with the rights holders.': 'Empfohlene Musik: nicht enthalten; alle Rechte bleiben bei den Rechteinhabern.',
        'Repository ↗': 'Repository ↗',
        'Scope': 'Geltungsbereich',
        'Software': 'Software',
        'Submit only material you created or have the right to release under CC BY 4.0.': 'Reiche nur Material ein, das du selbst geschaffen hast oder unter CC BY 4.0 veröffentlichen darfst.',
        'Terms &': 'Bedingungen &',
        'Terms and attribution': 'Bedingungen und Namensnennung',
        'Terms contents': 'Inhalt der Bedingungen',
        'Terms navigation': 'Navigation der Bedingungen',
        'Terms, licence, and attribution for The Mirrored Realms: CC BY 4.0 for original material, the SRD 5.2.1 notice, third-party material, contributions, and artwork.': 'Bedingungen, Lizenz und Namensnennung für die Spiegelreiche: CC BY 4.0 für eigenes Material, der SRD-5.2.1-Hinweis, Material Dritter, Beiträge und Artwork.',
        'The archive and this page.': 'Das Archiv und diese Seite.',
        'The full licence text is available at': 'Den vollständigen Lizenztext findest du unter',
        'The material is offered as is, without warranties, as set out in section 5 of the CC BY 4.0 licence.': 'Das Material wird so angeboten, wie es ist, ohne Gewährleistung, wie in Abschnitt 5 der CC-BY-4.0-Lizenz beschrieben.',
        'The Mirrored Realms / Terms': 'Die Spiegelreiche / Bedingungen',
        'The Mirrored Realms | Terms and Attribution': 'Die Spiegelreiche | Bedingungen und Namensnennung',
        'The Mirrored Realms does not use AI-generated artwork. Every image in the project is made by a person, and artwork contributions must be created by the artist without generative AI.': 'Die Spiegelreiche verwenden kein KI-generiertes Artwork. Jedes Bild im Projekt ist von einem Menschen gemacht, und beigetragenes Artwork muss ohne generative KI entstanden sein.',
        'The Mirrored Realms is an independent project by Okami. It is not published, endorsed, or approved by Wizards of the Coast. Dungeons & Dragons and D&D are trademarks of Wizards of the Coast LLC and are named here only to describe compatibility.': 'Die Spiegelreiche sind ein unabhängiges Projekt von Okami. Sie werden nicht von Wizards of the Coast veröffentlicht, unterstützt oder genehmigt. Dungeons & Dragons und D&D sind Marken von Wizards of the Coast LLC und werden hier nur genannt, um die Kompatibilität zu beschreiben.',
        'The Mirrored Realms is designed to be compatible with fifth edition using the SRD 5.2.1 rules foundation.': 'Die Spiegelreiche sind auf Basis des SRD 5.2.1 mit der fünften Edition kompatibel.',
        'The Mirrored Realms is in early development. Lore, mechanics, names, maps, and planned releases may change during writing and playtesting, and rules material is marked as playtest drafts.': 'Die Spiegelreiche sind in einer frühen Entwicklungsphase. Lore, Mechaniken, Namen, Karten und geplante Veröffentlichungen können sich beim Schreiben und Testen ändern, und Regelmaterial ist als Playtest-Entwurf gekennzeichnet.',
        'The project’s own name': 'Der Name des Projekts',
        'The rules foundation.': 'Das Regelfundament.',
        'The vault recommends music from other works for use at the table. No music is distributed with the project, and every recommended track remains the property of its composer and rights holders: Celeste (© Maddy Makes Games, music by Lena Raine), The Legend of Zelda and Super Mario (© Nintendo), and Professor Layton (© Level-5). Planned remixes of copyrighted music are not covered by the project licence and will only be published where permitted.': 'Der Vault empfiehlt Musik aus anderen Werken für den Spieltisch. Mit dem Projekt wird keine Musik verbreitet, und jeder empfohlene Titel bleibt Eigentum seiner Komponisten und Rechteinhaber: Celeste (© Maddy Makes Games, Musik von Lena Raine), The Legend of Zelda und Super Mario (© Nintendo) sowie Professor Layton (© Level-5). Geplante Remixe urheberrechtlich geschützter Musik fallen nicht unter die Projektlizenz und werden nur veröffentlicht, wo das erlaubt ist.',
        'These terms apply to The Mirrored Realms: the Obsidian vault in the GitHub repository ShadowOkami4/Mirrorgate with its notes, rules, adventures, and books, and to this project website.': 'Diese Bedingungen gelten für die Spiegelreiche: den Obsidian-Vault im GitHub-Repository ShadowOkami4/Mirrorgate mit seinen Notizen, Regeln, Abenteuern und Büchern sowie für diese Projektseite.',
        'These terms may be updated as the project grows. The current version and its effective date are always published on this page.': 'Diese Bedingungen können sich mit dem Projekt weiterentwickeln. Die aktuelle Fassung und ihr Gültigkeitsdatum stehen immer auf dieser Seite.',
        'They summarise the README and NOTICE of the repository. If this page and the LICENSE file in the repository ever disagree, the LICENSE file decides.': 'Sie fassen README und NOTICE des Repositorys zusammen. Sollten diese Seite und die LICENSE-Datei im Repository einmal voneinander abweichen, gilt die LICENSE-Datei.',
        'Third-party material': 'Material Dritter',
        'This work includes material from the System Reference Document 5.2.1 (“SRD 5.2.1”) by Wizards of the Coast LLC, available at': 'Dieses Werk enthält Material aus dem System Reference Document 5.2.1 („SRD 5.2.1“) von Wizards of the Coast LLC, abrufbar unter',
        'This work uses material from The Mirrored Realms (https://shadowokami.com/Mirrored_Realms), licensed under CC BY 4.0. Changes were made.': 'Dieses Werk verwendet Material aus The Mirrored Realms (https://shadowokami.com/Mirrored_Realms), lizenziert unter CC BY 4.0. Es wurden Änderungen vorgenommen.',
        'Unfinished, and provided as it is.': 'Unfertig, und so bereitgestellt, wie es ist.',
        'Use, change, and share the original material of The Mirrored Realms freely, also commercially, as long as you give credit. Rules from the SRD 5.2.1, third-party plugins, and recommended music keep their own terms. The project is independent and not made or endorsed by Wizards of the Coast.': 'Nutze, verändere und teile das eigene Material der Spiegelreiche frei, auch kommerziell, solange du das Projekt nennst. Regeln aus dem SRD 5.2.1, Plugins Dritter und empfohlene Musik behalten ihre eigenen Bedingungen. Das Projekt ist unabhängig und weder von Wizards of the Coast erstellt noch unterstützt.',
        'You may link to the GitHub repository instead of the website.': 'Statt der Website darfst du auch auf das GitHub-Repository verlinken.',
        'You may run The Mirrored Realms at your table, stream or record your sessions, and publish actual plays, adventures, and supplements built on it, also commercially, with credit as described above.': 'Du darfst die Spiegelreiche an deinem Tisch leiten, deine Runden streamen oder aufzeichnen und darauf aufbauende Actual Plays, Abenteuer und Erweiterungen veröffentlichen – auch kommerziell, mit Namensnennung wie oben beschrieben.',
        'Your version of Kagameru does not have to match the archive. The repository only defines what is canon for the project itself; at your table, your story decides.': 'Dein Kagameru muss nicht mit dem Archiv übereinstimmen. Das Repository legt nur fest, was für das Projekt selbst Kanon ist; an deinem Tisch entscheidet deine Geschichte.',
        'Your work stays yours, and it is credited.': 'Deine Arbeit bleibt deine, und sie wird genannt.',
    };

    const pageTranslations = {
        '404.html': notFound,
        'index.html': home,
        'voidline.html': voidline,
        'mirrorgate.html': mirrorgate,
        'mirrorgate-terms.html': { ...legalCommon, ...mirrorgateTerms },
        'lunaecho.html': { ...lunaecho, ...lunaechoV01 },
        'lunaecho-terms.html': { ...legalCommon, ...terms, ...lunaLegalV01 },
        'lunaecho-privacy.html': { ...legalCommon, ...privacy, ...lunaLegalV01 }
    };

    const cleanPath = window.location.pathname.replace(/\/+$/, '') || '/';
    const cleanRoutePages = {
        '/': 'index.html',
        '/LunaEcho': 'lunaecho.html',
        '/LunaEcho/Privacy': 'lunaecho-privacy.html',
        '/LunaEcho/Terms': 'lunaecho-terms.html',
        '/Mirrored_Realms': 'mirrorgate.html',
        '/Mirrored_Realms/Terms': 'mirrorgate-terms.html',
        '/Voidline': 'voidline.html'
    };
    const fileName = document.documentElement.dataset.page === '404'
        ? '404.html'
        : cleanRoutePages[cleanPath] || window.location.pathname.split('/').pop() || 'index.html';
    const translations = { ...common, ...(pageTranslations[fileName] || {}), ...redesign };
    const originalText = new WeakMap();
    const originalAttributes = new WeakMap();
    const originalTitle = document.title;
    let language = document.documentElement.dataset.language === 'de' ? 'de' : 'en';
    let languageSwitch;

    const translate = (value, targetLanguage = language) => {
        if (targetLanguage !== 'de') return value;
        return translations[value] || value;
    };

    const preserveWhitespace = (source, translated) => {
        const leading = source.match(/^\s*/)?.[0] || '';
        const trailing = source.match(/\s*$/)?.[0] || '';
        return `${leading}${translated}${trailing}`;
    };

    const shouldSkipText = (node) => {
        const parent = node.parentElement;
        return !parent || parent.closest('script, style, code, pre, .copy-code, [data-language-switch], [data-no-translate]');
    };

    const translateTextNodes = () => {
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        let node = walker.nextNode();

        while (node) {
            if (!shouldSkipText(node)) {
                if (!originalText.has(node)) originalText.set(node, node.nodeValue);
                const source = originalText.get(node);
                const key = source.trim();
                node.nodeValue = language === 'de' && translations[key]
                    ? preserveWhitespace(source, translations[key])
                    : source;
            }
            node = walker.nextNode();
        }
    };

    const translateAttributes = () => {
        document.querySelectorAll('[aria-label], [alt], [title]').forEach((element) => {
            if (element.closest('[data-language-switch]')) return;
            if (!originalAttributes.has(element)) originalAttributes.set(element, {});
            const stored = originalAttributes.get(element);

            ['aria-label', 'alt', 'title'].forEach((attribute) => {
                if (!element.hasAttribute(attribute)) return;
                if (!(attribute in stored)) stored[attribute] = element.getAttribute(attribute);
                element.setAttribute(attribute, translate(stored[attribute]));
            });
        });

        document.querySelectorAll('meta[name="description"], meta[property="og:title"], meta[property="og:description"]').forEach((element) => {
            if (!originalAttributes.has(element)) originalAttributes.set(element, {});
            const stored = originalAttributes.get(element);
            if (!('content' in stored)) stored.content = element.getAttribute('content');
            element.setAttribute('content', translate(stored.content));
        });
    };

    const updateDynamicControls = () => {
        document.querySelectorAll('.copy-code').forEach((button) => {
            const state = button.dataset.copyState || 'copy';
            const key = state === 'copied' ? 'Copied' : state === 'select' ? 'Select text' : 'Copy';
            button.textContent = translate(key);
        });
    };

    const updateSwitch = () => {
        if (!languageSwitch) return;
        languageSwitch.querySelectorAll('[data-language]').forEach((button) => {
            button.setAttribute('aria-pressed', String(button.dataset.language === language));
        });
        languageSwitch.setAttribute('aria-label', language === 'de' ? 'Sprache' : 'Language');
        languageSwitch.dataset.activeLanguage = language;
    };

    const applyLanguage = (nextLanguage, persist = true) => {
        language = nextLanguage === 'de' ? 'de' : 'en';
        document.documentElement.lang = language;
        document.documentElement.dataset.language = language;
        document.title = translate(originalTitle);
        translateTextNodes();
        translateAttributes();
        updateDynamicControls();
        updateSwitch();

        if (persist) {
            try {
                window.localStorage.setItem(STORAGE_KEY, language);
            } catch {
                // The switch still works for this page when storage is unavailable.
            }
        }

        window.dispatchEvent(new CustomEvent('site-language-change', { detail: { language } }));
    };

    const createSwitch = () => {
        // M3 connected button group: the active language is a pressed toggle button.
        languageSwitch = document.createElement('div');
        languageSwitch.className = 'language-switch';
        languageSwitch.dataset.languageSwitch = '';
        languageSwitch.setAttribute('role', 'group');
        languageSwitch.innerHTML = `
            <button class="language-option" type="button" data-language="en" lang="en" aria-pressed="false" title="English">EN</button>
            <button class="language-option" type="button" data-language="de" lang="de" aria-pressed="false" title="Deutsch">DE</button>
        `;

        const header = document.querySelector('.site-header');
        const menuButton = header?.querySelector('.menu-toggle');
        if (header) {
            header.insertBefore(languageSwitch, menuButton || header.querySelector('.site-nav'));
        } else {
            languageSwitch.classList.add('language-switch-standalone');
            document.body.append(languageSwitch);
        }

        languageSwitch.querySelectorAll('[data-language]').forEach((button) => {
            button.addEventListener('click', () => applyLanguage(button.dataset.language));
        });
    };

    const audit = () => {
        const missing = new Set();
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        let node = walker.nextNode();

        while (node) {
            if (!shouldSkipText(node)) {
                const source = (originalText.get(node) || node.nodeValue).trim();
                if (source && /[A-Za-z]/.test(source) && !translations[source]) missing.add(source);
            }
            node = walker.nextNode();
        }

        document.querySelectorAll('[aria-label], [alt], [title]').forEach((element) => {
            if (element.closest('[data-language-switch]')) return;
            ['aria-label', 'alt', 'title'].forEach((attribute) => {
                const source = originalAttributes.get(element)?.[attribute] || element.getAttribute(attribute);
                if (source && /[A-Za-z]/.test(source) && !translations[source]) missing.add(source);
            });
        });

        document.querySelectorAll('meta[name="description"], meta[property="og:title"], meta[property="og:description"]').forEach((element) => {
            const source = originalAttributes.get(element)?.content || element.getAttribute('content');
            if (source && /[A-Za-z]/.test(source) && !translations[source]) missing.add(source);
        });

        if (/[A-Za-z]/.test(originalTitle) && !translations[originalTitle]) missing.add(originalTitle);
        return [...missing].sort((a, b) => a.localeCompare(b));
    };

    createSwitch();
    applyLanguage(language, false);
    document.documentElement.classList.add('language-ready');

    if (new URLSearchParams(window.location.search).has('i18n-audit')) {
        const auditOutput = document.createElement('script');
        auditOutput.id = 'translation-audit';
        auditOutput.type = 'application/json';
        auditOutput.textContent = JSON.stringify(audit());
        document.body.append(auditOutput);
    }

    window.siteLanguage = {
        get language() { return language; },
        apply: applyLanguage,
        translate,
        updateDynamicControls,
        audit
    };
})();
