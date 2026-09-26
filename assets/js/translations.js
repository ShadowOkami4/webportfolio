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
        'PROJECT / 04': 'PROJEKT / 04',
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
        'Hey, I’m Okami': 'Hey, ich bin Okami',
        'I build what I want to use.': 'Ich baue, was ich selbst nutzen will.',
        'Then I share it.': 'Und dann teile ich es.',
        'Linux desktops, Discord bots, little automations and a whole D&D world – I make them for myself first. If something turns out useful (or just fun), it ends up here for everyone.': 'Linux-Desktops, Discord-Bots, kleine Automatisierungen und eine ganze D&D-Welt – ich baue sie erst mal für mich. Wenn etwas nützlich (oder einfach witzig) wird, landet es hier für alle.',
        'See what I’m building': 'Schau dir meine Projekte an',
        'Say hi': 'Sag Hallo',
        'No studio, no master plan.': 'Kein Studio, kein Masterplan.',
        'Just stuff I got curious about.': 'Nur Dinge, die mich neugierig gemacht haben.',
        'I’m Okami – a hobby developer who’s still pretty early on the journey. I learn by building things I actually want to use: Linux desktop tweaks, small automations, Discord tools and a tabletop world that got a little out of hand.': 'Ich bin Okami – Hobbyentwickler und noch ziemlich am Anfang. Ich lerne, indem ich Dinge baue, die ich wirklich nutzen will: Linux-Desktop-Tweaks, kleine Automatisierungen, Discord-Tools und eine Tabletop-Welt, die ein bisschen aus dem Ruder gelaufen ist.',
        'If a project turns out useful or fun, I put it online so you can poke around, fork it or borrow the good bits. On YouTube you’ll find gaming mixed with project previews; on Twitch I just stream for fun.': 'Wenn ein Projekt nützlich oder witzig wird, stelle ich es online – zum Stöbern, Forken oder um dir die besten Teile zu schnappen. Auf YouTube gibt’s Gaming gemischt mit Projekt-Vorschauen; auf Twitch streame ich einfach aus Spaß.',
        'How it usually goes': 'So läuft’s meistens',
        'Something catches my eye.': 'Irgendwas weckt mein Interesse.',
        'I build the version I’d want to use – and learn a ton on the way.': 'Ich baue die Version, die ich selbst nutzen würde – und lerne dabei jede Menge.',
        'Once it’s worth showing, it goes public.': 'Sobald es sich zeigen lässt, wird es öffentlich.',
        'AI transparency': 'KI-Transparenz',
        'Yes, I use AI.': 'Ja, ich nutze KI.',
        'AI tools help me brainstorm, sketch prototypes, debug and learn. I review and adapt what comes out, make the calls myself, and I’m responsible for everything I publish.': 'KI-Tools helfen mir beim Brainstorming, bei Prototypen, beim Debuggen und beim Lernen. Ich prüfe und überarbeite die Ergebnisse, treffe die Entscheidungen selbst und stehe für alles gerade, was ich veröffentliche.',
        'One little lab.': 'Ein kleines Labor.',
        'Every project started with something I wanted to use, understand or imagine. These are the ones that made it out into the world.': 'Jedes Projekt begann mit etwas, das ich nutzen, verstehen oder mir ausmalen wollte. Das hier sind die, die es raus in die Welt geschafft haben.',
        '0.3.0dev · public preview': '0.3.0dev · öffentliche Vorschau',
        'Linux / Hyprland desktop shell': 'Linux / Hyprland-Desktop-Shell',
        'Discord / in development': 'Discord / in Entwicklung',
        'Personal utility / automation': 'Persönliches Tool / Automatisierung',
        'Tabletop / open-source setting': 'Tabletop / Open-Source-Setting',
        'Open-source world setting': 'Open-Source-Weltensetting',
        'A tiny tool from my own streaming setup: it pings Discord the moment a stream goes live. Now public, in case you need the same thing.': 'Ein kleines Tool aus meinem Streaming-Setup: Es sagt auf Discord Bescheid, sobald ein Stream live geht. Jetzt öffentlich, falls du das auch brauchst.',
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
        'Repository planned': 'Repository geplant',
        'View StreamNotifier on GitHub': 'StreamNotifier auf GitHub ansehen',
        'View source': 'Quellcode ansehen',
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
        'Public development preview.': 'Öffentliche Entwicklungsvorschau.',
        'Available to test on Arch Linux with Hyprland, but not yet intended as a production-stable shell.': 'Kann unter Arch Linux mit Hyprland getestet werden, ist aber noch nicht als produktionsstabile Shell gedacht.',
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
        'The Mirrored Realms | Open-Source D&D 5.5e Setting': 'Die Spiegelreiche | Open-Source-Setting für D&D 5.5e',
        'The Mirrored Realms is an open-source D&D 5.5e world setting built as an interconnected Obsidian vault of broken time, folded space, dangerous reflections, and unfinished histories.': 'Die Spiegelreiche sind ein Open-Source-Weltensetting für D&D 5.5e, aufgebaut als vernetzter Obsidian-Vault aus gebrochener Zeit, gefaltetem Raum, gefährlichen Spiegelbildern und unvollendeten Geschichten.',
        'Enter an evolving open-source D&D 5.5e setting where mirrors remember other lives and roads lose track of centuries.': 'Betritt ein wachsendes Open-Source-Setting für D&D 5.5e, in dem Spiegel sich an andere Leben erinnern und Wege ganze Jahrhunderte verlieren.',
        'Vault': 'Archiv',
        'Contents': 'Inhalte',
        'Open source / D&D 5.5e': 'Open Source / D&D 5.5e',
        'The Mirrored': 'Die',
        'Realms': 'Spiegelreiche',
        'Enter the vault ↗': 'Das Archiv betreten ↗',
        'Read the records ↓': 'Die Aufzeichnungen lesen ↓',
        'Obsidian vault': 'Obsidian-Vault',
        'An abstract mirror doorway leading into the Library of Kagami': 'Ein abstraktes Spiegeltor, das in die Bibliothek von Kagami führt',
        '“A mirror is a door pretending to be furniture.”': '„Ein Spiegel ist eine Tür, die vorgibt, ein Möbelstück zu sein.“',
        'ARCHIVE / UNSEALED': 'ARCHIV / ENTSIEGELT',
        'Ruleset in design': 'Regelwerk in Arbeit',
        'Journeys foretold': 'Vorhergesagte Reisen',
        'The archive is still forming': 'Das Archiv nimmt noch Gestalt an',
        'Inside the vault': 'Im Archiv',
        'Nothing in the vault stands alone. A royal name opens onto an old war, a creature points toward a broken age, and every unfinished story leaves another door ajar. All paths begin in the Library of Kagami.': 'Nichts im Archiv steht für sich allein. Ein königlicher Name führt zu einem alten Krieg, eine Kreatur weist auf ein zerbrochenes Zeitalter, und jede unvollendete Geschichte lässt eine weitere Tür offen. Alle Wege beginnen in der Bibliothek von Kagami.',
        'The archive': 'Das Archiv',
        'Professor Phineas Phantomhive II keeps watch over field notes, disputed maps, recovered testimony, and chapters that may describe moments which never happened. He insists the catalogue is reliable.': 'Professor Phineas Phantomhive II wacht über Feldnotizen, umstrittene Karten, geborgene Zeugenaussagen und Kapitel, die möglicherweise Momente beschreiben, die nie geschehen sind. Er besteht darauf, dass der Katalog verlässlich ist.',
        'The world': 'Die Welt',
        'A realm built over wounds no kingdom can truly claim. Beneath palaces and borders lie the remains of the Primordial War, still waiting to reveal whether they hold salvation or the shape of the next catastrophe.': 'Ein Reich, errichtet über Wunden, die kein Königreich wirklich beanspruchen kann. Unter Palästen und Grenzen liegen die Überreste des Primordial War und warten darauf zu offenbaren, ob sie Erlösung oder die Gestalt der nächsten Katastrophe bergen.',
        'The threshold': 'Die Schwelle',
        'Not a road or conventional plane, but a distorted passage through reflection, memory, folded distance, and broken chronology. Some mirrors show a face. Others wait for an invitation.': 'Keine Straße und keine gewöhnliche Ebene, sondern ein verzerrter Durchgang durch Spiegelung, Erinnerung, gefaltete Entfernung und gebrochene Chronologie. Manche Spiegel zeigen ein Gesicht. Andere warten auf eine Einladung.',
        'Current subjects in The Mirrored Realms vault': 'Aktuelle Themen im Archiv der Spiegelreiche',
        'Shard Monsters': 'Splittermonster',
        'Planned journeys': 'Geplante Reisen',
        'Every planned adventure belongs to the same setting. A single night beside the wrong mirror may end at dawn, or return much later as the first thread of a history the players have already changed.': 'Jedes geplante Abenteuer gehört zum selben Setting. Eine einzelne Nacht neben dem falschen Spiegel kann im Morgengrauen enden oder viel später als erster Faden einer Geschichte zurückkehren, die die Spielenden bereits verändert haben.',
        'Planned / Standalone': 'Geplant / Eigenständig',
        'One-shots': 'One-Shots',
        'Ten doors into cursed estates, forbidden archives, unstable scars, and mirrors that promise to open only once.': 'Zehn Türen zu verfluchten Anwesen, verbotenen Archiven, instabilen Narben und Spiegeln, die versprechen, sich nur einmal zu öffnen.',
        'Planned / Short arcs': 'Geplant / Kurze Handlungsbögen',
        'Short adventures': 'Kurze Abenteuer',
        'Five deeper trails where local conflicts expose recurring faces, dangerous relics, and consequences that refuse to remain where they began.': 'Fünf tiefere Pfade, auf denen lokale Konflikte wiederkehrende Gesichter, gefährliche Relikte und Folgen offenbaren, die nicht dort bleiben wollen, wo sie begonnen haben.',
        'Planned / Long term': 'Geplant / Langfristig',
        'Campaign frameworks': 'Kampagnenrahmen',
        'Three long shadows cast across the Shattered Hope Era, where crowns, divine wounds, and the Mirrorgate can reshape an entire table’s version of Zerkalo.': 'Drei lange Schatten über der Shattered Hope Era, in der Kronen, göttliche Wunden und das Mirrorgate die gesamte Version von Zerkalo einer Spielrunde neu formen können.',
        'Roadmap:': 'Roadmap:',
        'These numbers describe the intended complete collection. The Mirrored Realms is still in early development, so individual stories and their order may change as the setting grows.': 'Diese Zahlen beschreiben die geplante vollständige Sammlung. Die Spiegelreiche befinden sich noch in einer frühen Entwicklungsphase, daher können sich einzelne Geschichten und ihre Reihenfolge mit dem Wachstum des Settings ändern.',
        'Beyond adventures': 'Mehr als Abenteuer',
        'Some records are meant to be read. Others are meant to be carried into a campaign, worn by a character, awakened beneath a ruin, or encountered when the party realizes it is no longer alone.': 'Manche Aufzeichnungen sind zum Lesen bestimmt. Andere sollen in eine Kampagne getragen, von einem Charakter getragen, unter einer Ruine erweckt oder entdeckt werden, wenn die Gruppe erkennt, dass sie nicht mehr allein ist.',
        'In the vault': 'Im Archiv',
        'World & history': 'Welt & Geschichte',
        'The oldest records disagree about Zerkalo, the Primordial War, and what truly began the Shattered Hope Era.': 'Die ältesten Aufzeichnungen widersprechen sich über Zerkalo, den Primordial War und darüber, was die Shattered Hope Era wirklich auslöste.',
        'People & powers': 'Menschen & Mächte',
        'Royal bloodlines, veiled factions, watchful gods, divided cultures, and names that appear more often than coincidence allows.': 'Königliche Blutlinien, verschleierte Fraktionen, wachsame Götter, gespaltene Kulturen und Namen, die häufiger auftauchen, als es der Zufall erlauben sollte.',
        'In progress': 'In Arbeit',
        'Monsters': 'Monster',
        'Shard-born things already haunt the records. More wait beyond the pages that have been safely catalogued.': 'Splittergeborene Wesen suchen die Aufzeichnungen bereits heim. Weitere warten jenseits der Seiten, die sicher katalogisiert werden konnten.',
        'Adventures & fiction': 'Abenteuer & Fiktion',
        'The Pack in the Twilight and the Shattered Hope campaign frame are among the first threads pulled from the dark.': 'The Pack in the Twilight und der Kampagnenrahmen Shattered Hope gehören zu den ersten Fäden, die aus der Dunkelheit gezogen wurden.',
        'Subclasses & feats': 'Unterklassen & Talente',
        'Character options marked by old blood, living reflections, divine echoes, and time that no longer moves in a straight line.': 'Charakteroptionen, geprägt von altem Blut, lebenden Spiegelbildern, göttlichen Echos und einer Zeit, die sich nicht länger geradlinig bewegt.',
        'Magic items & more': 'Magische Gegenstände & mehr',
        'Relics, tools, hazards, and other objects whose histories may be more dangerous than their powers.': 'Relikte, Werkzeuge, Gefahren und andere Gegenstände, deren Geschichten gefährlicher sein könnten als ihre Kräfte.',
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
        'Select the repository folder inside Obsidian.': 'Wähle den Repository-Ordner in Obsidian aus.',
        'Find the entrance': 'Den Eingang finden',
        'Open': 'Öffne',
        'and meet the library’s custodian.': 'und triff den Hüter der Bibliothek.',
        'Artwork note': 'Hinweis zu Bildern',
        'Most images currently inside the vault are AI-generated visual aids and temporary representations. Original artist contributions are welcome, and accepted work will be clearly credited.': 'Die meisten Bilder im Archiv sind derzeit KI-generierte visuelle Hilfen und vorläufige Darstellungen. Beiträge von Künstlerinnen und Künstlern sind willkommen, und angenommene Werke werden deutlich gekennzeichnet.',
        'The Library of Kagami awaits': 'Die Bibliothek von Kagami wartet',
        'That may be the first thing inside it that tells the truth. Read the records, borrow what your table needs, and leave behind a version of the Mirrored Realms that did not exist before you entered.': 'Das könnte das Erste darin sein, das die Wahrheit sagt. Lies die Aufzeichnungen, nimm, was deine Spielrunde braucht, und hinterlasse eine Version der Spiegelreiche, die vor deinem Eintritt nicht existierte.',
        'Open The Mirrored Realms on GitHub ↗': 'Die Spiegelreiche auf GitHub öffnen ↗',
        'THE MIRRORED REALMS / PROJECT 04': 'DIE SPIEGELREICHE / PROJEKT 04',
    };

    const lunaecho = {
        'Features': 'Funktionen',
        'GitHub repository planned': 'GitHub-Repository geplant',
        'GitHub planned': 'GitHub geplant',
        'No public release yet': 'Noch keine öffentliche Veröffentlichung',
        'You': 'Dir',
        'At a glance': 'Auf einen Blick',
        'Decision': 'Entscheidung',
        'Music': 'Musik',
        'Legal & privacy': 'Rechtliches & Datenschutz',
        'Clear rules.': 'Klare Regeln.',
        'Transparent data use.': 'Transparente Datennutzung.',
        'LunaEcho publishes permanent, English-language legal documents for Discord users, server administrators, and application review.': 'LunaEcho veröffentlicht dauerhafte Rechtsdokumente auf Englisch und Deutsch für Discord-Nutzer, Serveradministratoren und die Anwendungsprüfung.',
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
        'Okami is a hobby developer sharing personal Linux, Discord, automation, and tabletop projects built from curiosity and made public for everyone.': 'Okami ist ein Hobbyentwickler, der persönliche Projekte rund um Linux, Discord, Automatisierung und Tabletop aus Neugier entwickelt und für alle veröffentlicht.',
        'Ideas built for personal use first, then opened for everyone to explore.': 'Ideen, die zuerst für den eigenen Gebrauch entstehen und anschließend für alle zum Entdecken geöffnet werden.',
        'PERSONAL LAB': 'PERSÖNLICHES LABOR',
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


        'The Obsidian vault calls itself an archive. Follow its links long enough and it becomes a world: Zerkalo, where mirrors remember other lives, roads lose entire centuries, and old divine wounds have started dreaming again.': 'Der Obsidian-Vault nennt sich ein Archiv. Folgst du seinen Links lange genug, wird daraus eine Welt: Zerkalo, wo Spiegel sich an andere Leben erinnern, Straßen ganze Jahrhunderte verlieren und alte göttliche Wunden wieder zu träumen beginnen.',
        'Open one record.': 'Öffne einen Eintrag.',
        'Find three more.': 'Finde drei weitere.',
        'Eighteen doors.': 'Achtzehn Türen.',
        'No safe order.': 'Keine sichere Reihenfolge.',
        'The stories are only': 'Die Geschichten sind nur',
        'the first layer.': 'die erste Schicht.',
        'The realm notices': 'Das Reich bemerkt,',
        'when you enter.': 'wenn du eintrittst.',
    };

    const lunaechoV01 = {
        'LunaEcho | Modular Open-Source Discord Platform': 'LunaEcho | Modulare Open-Source-Discord-Plattform',
        'LunaEcho is a planned modular, all-in-one, open-source Discord community platform available as Self-Hosted, Cloud, or Custom.': 'LunaEcho ist eine geplante modulare All-in-One-Open-Source-Plattform für Discord-Communitys, verfügbar als Self-Hosted, Cloud oder Custom.',
        'One bot. Every community tool. Your way. Explore LunaEcho Self-Hosted, Cloud, and Custom.': 'Ein Bot. Jedes Community-Werkzeug. Auf deine Weise. Entdecke LunaEcho Self-Hosted, Cloud und Custom.',
        'Hosting': 'Hosting',
        'Modules': 'Module',
        'Architecture': 'Architektur',
        'Product plan v0.1 / Pre-release': 'Produktplan v0.1 / Vorabversion',
        'One bot. Every community tool. Your way.': 'Ein Bot. Jedes Community-Werkzeug. Auf deine Weise.',
        'A modular, all-in-one, open-source Discord community platform. Enable only the tools your server needs, host it yourself, or let LunaEcho handle the infrastructure.': 'Eine modulare All-in-One-Open-Source-Plattform für Discord-Communitys. Aktiviere nur die Werkzeuge, die dein Server benötigt, hoste sie selbst oder überlasse LunaEcho die Infrastruktur.',
        'Choose how to run it ↓': 'Wähle, wie du es betreibst ↓',
        'Explore the modules': 'Module entdecken',
        'Open source first': 'Open Source zuerst',
        'Modular by design': 'Von Grund auf modular',
        'One shared codebase': 'Eine gemeinsame Codebasis',
        'Ways to run LunaEcho': 'Arten, LunaEcho zu betreiben',
        'Planned version 1 modules': 'Geplante Module für Version 1',
        'Shared modular codebase': 'Gemeinsame modulare Codebasis',
        'Three ways to run it': 'Drei Arten des Betriebs',
        'Same LunaEcho.': 'Dasselbe LunaEcho.',
        'Different responsibility.': 'Andere Verantwortung.',
        'The product stays the same. What changes is who hosts it, which Discord bot identity it uses, and which operational limits apply.': 'Das Produkt bleibt gleich. Es ändert sich nur, wer es hostet, welche Discord-Bot-Identität verwendet wird und welche betrieblichen Limits gelten.',
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
        'PostgreSQL + Redis + BullMQ': 'PostgreSQL + Redis + BullMQ',
        'PRE-RELEASE / PRODUCT PLAN 0.1': 'VORABVERSION / PRODUKTPLAN 0.1',
        'Self-Hosted architecture': 'Self-Hosted-Architektur',
        'Cloud architecture': 'Cloud-Architektur',
        'Custom architecture': 'Custom-Architektur',
        'LunaEcho runtime modes': 'LunaEcho-Betriebsmodi',
        '01 / Your infrastructure': '01 / Deine Infrastruktur',
        'Free, always': 'Immer kostenlos',
        'Open source': 'Open Source',
        'Run the complete LunaEcho platform on hardware you control, using your own Discord application and bot token.': 'Betreibe die vollständige LunaEcho-Plattform auf eigener Hardware mit deiner eigenen Discord-Anwendung und deinem eigenen Bot-Token.',
        'Your hardware': 'Deine Hardware',
        'Your bot': 'Dein Bot',
        'Your server': 'Dein Server',
        'Complete open-source feature set': 'Vollständiger Open-Source-Funktionsumfang',
        'No artificial LunaEcho feature restrictions': 'Keine künstlichen LunaEcho-Funktionseinschränkungen',
        'Your data, branding, bot identity, and infrastructure': 'Deine Daten, dein Branding, deine Bot-Identität und deine Infrastruktur',
        'You handle setup, updates, backups, and uptime': 'Du kümmerst dich um Einrichtung, Updates, Backups und Verfügbarkeit',
        'Best for': 'Am besten für',
        'Technical users who want full control': 'Technische Nutzer, die volle Kontrolle möchten',
        '02 / Shared managed service': '02 / Gemeinsam genutzter verwalteter Dienst',
        'Invite and start': 'Einladen und starten',
        'Invite the official LunaEcho bot and use the platform without maintaining a VPS, Docker setup, database, or bot application.': 'Lade den offiziellen LunaEcho-Bot ein und nutze die Plattform, ohne einen VPS, Docker, eine Datenbank oder Bot-Anwendung zu warten.',
        'LunaEcho hardware': 'LunaEcho-Hardware',
        'LunaEcho bot': 'LunaEcho-Bot',
        'Hosting, maintenance, and updates included': 'Hosting, Wartung und Updates inklusive',
        'Official shared LunaEcho bot identity': 'Offizielle gemeinsam genutzte LunaEcho-Bot-Identität',
        'Useful core modules with reasonable service limits': 'Nützliche Kernmodule mit angemessenen Dienstlimits',
        'No hardware or bot token required from you': 'Keine Hardware und kein Bot-Token von dir erforderlich',
        'Most small communities': 'Die meisten kleinen Communitys',
        '03 / Managed custom identity': '03 / Verwaltete eigene Identität',
        'Paid / size-based': 'Kostenpflichtig / nach Größe',
        'Your bot, managed by us': 'Dein Bot, von uns verwaltet',
        'Use your own Discord application and bot identity while LunaEcho manages the deployment, database, updates, backups, and monitoring.': 'Nutze deine eigene Discord-Anwendung und Bot-Identität, während LunaEcho Betrieb, Datenbank, Updates, Backups und Monitoring verwaltet.',
        'Your bot name, avatar, profile, and application': 'Dein Bot-Name, Avatar, Profil und deine Anwendung',
        'Complete LunaEcho functionality': 'Vollständiger LunaEcho-Funktionsumfang',
        'No normal Cloud feature restrictions': 'Keine normalen Cloud-Funktionseinschränkungen',
        'Managed infrastructure and customer support': 'Verwaltete Infrastruktur und Kundensupport',
        'Established communities wanting their own identity': 'Etablierte Communitys, die ihre eigene Identität möchten',
        'Your bot. Powered by LunaEcho. Hosted by us.': 'Dein Bot. Angetrieben von LunaEcho. Von uns gehostet.',
        'What actually changes?': 'Was ändert sich wirklich?',
        'Custom server-size brackets belong inside billing. They are not separate products.': 'Größenstufen für Custom gehören in die Abrechnung. Sie sind keine eigenen Produkte.',
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
        'Exact Custom prices, member brackets, and Cloud limits will be set only after real measurements of music, database, storage, bandwidth, backup, and support costs.': 'Exakte Custom-Preise, Mitgliederstufen und Cloud-Limits werden erst nach realen Messungen der Kosten für Musik, Datenbank, Speicher, Bandbreite, Backups und Support festgelegt.',
        'Version 1 modules': 'Module für Version 1',
        'Enable what matters.': 'Aktiviere, was wichtig ist.',
        'Leave the rest quiet.': 'Lass den Rest ruhig.',
        'A server should not receive a hundred commands simply because LunaEcho supports them. Every major capability is planned as an individually configurable module.': 'Ein Server sollte nicht hundert Befehle erhalten, nur weil LunaEcho sie unterstützt. Jede wichtige Fähigkeit ist als einzeln konfigurierbares Modul geplant.',
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
        'Enabled': 'Aktiviert',
        'Configuration stays yours.': 'Die Konfiguration bleibt erhalten.',
        'Disabling a module should stop its commands, events, and workers without immediately destroying its settings. Turn it back on when your community needs it again.': 'Das Deaktivieren eines Moduls soll seine Befehle, Ereignisse und Worker stoppen, ohne die Einstellungen sofort zu löschen. Aktiviere es wieder, wenn deine Community es benötigt.',
        'Platform foundation': 'Plattformfundament',
        'One codebase.': 'Eine Codebasis.',
        'Three runtime modes.': 'Drei Betriebsmodi.',
        'Self-Hosted, Cloud, and Custom are deployment choices, not separate bots. A fix in a module should improve LunaEcho for everyone.': 'Self-Hosted, Cloud und Custom sind Betriebsoptionen, keine getrennten Bots. Eine Korrektur in einem Modul soll LunaEcho für alle verbessern.',
        'Planned foundation': 'Geplantes Fundament',
        'TypeScript throughout': 'Durchgehend TypeScript',
        'Node.js, TypeScript, and discord.js connect the bot, API, dashboard, workers, and modules through shared types.': 'Node.js, TypeScript und discord.js verbinden Bot, API, Dashboard, Worker und Module über gemeinsame Typen.',
        'Next.js + React dashboard': 'Next.js- + React-Dashboard',
        'Docker Compose for self-hosting': 'Docker Compose für Self-Hosting',
        'S3-compatible object storage': 'S3-kompatibler Objektspeicher',
        'Prisma or Drizzle still to be evaluated': 'Prisma oder Drizzle werden noch bewertet',
        'Custom token security': 'Sicherheit von Custom-Tokens',
        'A bot token is a password.': 'Ein Bot-Token ist ein Passwort.',
        'Custom requires a real secrets system from day one. Customer bot tokens must be encrypted at rest and exposed only to the service that establishes the Discord connection.': 'Custom benötigt vom ersten Tag an ein echtes Secrets-System. Kunden-Bot-Tokens müssen verschlüsselt gespeichert werden und dürfen nur dem Dienst zugänglich sein, der die Discord-Verbindung herstellt.',
        'Never included in logs, analytics, or support tickets': 'Niemals in Protokollen, Analysen oder Support-Tickets',
        'Never returned to the browser after submission': 'Nach der Übermittlung niemals an den Browser zurückgegeben',
        'Excluded from normal database exports': 'Von normalen Datenbankexporten ausgeschlossen',
        'Masked in the dashboard and replaced, never revealed': 'Im Dashboard maskiert und nur ersetzt, niemals angezeigt',
        'Two permission layers': 'Zwei Berechtigungsebenen',
        'Discord access is not billing access.': 'Discord-Zugriff ist kein Abrechnungszugriff.',
        'Discord permissions control what the bot can do. LunaEcho dashboard permissions control what staff can configure, inspect, or purchase.': 'Discord-Berechtigungen bestimmen, was der Bot tun darf. LunaEcho-Dashboard-Berechtigungen bestimmen, was das Team konfigurieren, einsehen oder kaufen darf.',
        'Manage moderation or tickets': 'Moderation oder Tickets verwalten',
        'View logs and analytics': 'Protokolle und Analysen ansehen',
        'Edit automations and modules': 'Automatisierungen und Module bearbeiten',
        'Manage hosting, billing, and support access': 'Hosting, Abrechnung und Supportzugriff verwalten',
        'Support boundaries': 'Support-Grenzen',
        'Responsibility follows hosting.': 'Verantwortung folgt dem Hosting.',
        'Self-Hosted receives documentation and community support. Cloud receives best-effort support. Custom adds managed support for LunaEcho infrastructure, deployment, updates, and billing.': 'Self-Hosted erhält Dokumentation und Community-Support. Cloud erhält Best-Effort-Support. Custom ergänzt verwalteten Support für LunaEcho-Infrastruktur, Betrieb, Updates und Abrechnung.',
        'No promise of 24/7 support at launch': 'Kein Versprechen von 24/7-Support zum Start',
        'No promise to repair third-party VPS setups': 'Kein Versprechen, fremde VPS-Setups zu reparieren',
        'Third-party and Discord configuration remain separate': 'Drittanbieter- und Discord-Konfiguration bleiben getrennt',
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
        'The roadmap describes order, not dates. Billing comes late, after the core community tools and managed infrastructure prove themselves.': 'Der Fahrplan beschreibt eine Reihenfolge, keine Termine. Die Abrechnung kommt spät, nachdem sich die Community-Kernwerkzeuge und die verwaltete Infrastruktur bewährt haben.',
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
        'Exact pricing, member brackets, Cloud limits, large-scale orchestration, AI features, and enterprise features remain intentionally open until the platform provides evidence for those decisions.': 'Exakte Preise, Mitgliederstufen, Cloud-Limits, großskalige Orchestrierung, KI-Funktionen und Enterprise-Funktionen bleiben bewusst offen, bis die Plattform belastbare Grundlagen für diese Entscheidungen liefert.',
        'Effective 27 August 2026': 'Gültig ab 27. August 2026',
        'Acceptable use, deployment responsibilities, service availability, and pre-release conditions.': 'Zulässige Nutzung, Betriebsverantwortung, Dienstverfügbarkeit und Bedingungen der Vorabversion.',
        'Data categories, token safeguards, retention, service providers, security, and deletion requests.': 'Datenkategorien, Token-Schutz, Aufbewahrung, Dienstleister, Sicherheit und Löschanfragen.',
        'Pre-release product plan v0.1': 'Produktplan v0.1 / Vorabversion',
        'Open source first.': 'Open Source zuerst.',
        'Public only when ready.': 'Erst öffentlich, wenn es bereit ist.',
        'LunaEcho is not accepting public servers yet. The repository, Cloud, Custom, final limits, and release documentation will appear only when their roadmap stages are ready.': 'LunaEcho nimmt noch keine öffentlichen Server an. Repository, Cloud, Custom, endgültige Limits und Release-Dokumentation erscheinen erst, wenn ihre jeweiligen Fahrplanstufen bereit sind.'
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

    const pageTranslations = {
        '404.html': notFound,
        'index.html': home,
        'voidline.html': voidline,
        'mirrorgate.html': mirrorgate,
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
        return !parent || parent.closest('script, style, code, pre, .copy-code, [data-language-switch]');
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
