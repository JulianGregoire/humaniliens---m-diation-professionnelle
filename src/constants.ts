import { Handshake, Scale, Globe2, Building2 } from 'lucide-react';
import { ServiceItem, CaseStudy, NavLink, FAQItem, BlogPost } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Accueil', href: '#home' },
  { label: 'À propos', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Cas Concrets', href: '#cases' },
  { label: 'Avis', href: '#avis' },
  { label: 'Blog', href: '#blog' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  // Aux particuliers
  {
    id: 'perso-1',
    category: 'particulier',
    title: 'Clarification & Blocages',
    description: 'Accompagner une personne à structurer sa réflexion, clarifier ses choix professionnels ou personnels et dépasser ses blocages cognitifs.',
    icon: Globe2,
  },
  {
    id: 'perso-2',
    category: 'particulier',
    title: 'Communication SIC®',
    description: 'Aider une personne à identifier ses interactions en communication et à diversifier ses modes de communication en tant que Consultante SIC® habilitée.',
    icon: Handshake,
  },
  {
    id: 'perso-3',
    category: 'particulier',
    title: 'Résolution de Conflit',
    description: 'Accompagner par le dispositif de médiation deux personnes dans la résolution de leur conflit.',
    icon: Scale,
  },
  // Aux entreprises
  {
    id: 'ent-1',
    category: 'entreprise',
    title: 'Qualité Relationnelle & RSE',
    description: 'Accompagner les entreprises dans la mise en place de mécanismes en qualité relationnelle en lien avec leur RSE sur 3 volets de prévention :',
    subItems: [
      'Primaire : promotion de la qualité relationnelle auprès des équipes',
      'Secondaire : anticipation de terrain pour suivre et guider les personnes',
      'Tertiaire : neutralisation du conflit (restauration de la relation)'
    ],
    icon: Building2,
  },
  {
    id: 'ent-2',
    category: 'entreprise',
    title: 'Médiation Intra-entreprise',
    description: 'Accompagner la résolution de conflits entre collaborateurs ou entre direction et salariés. Rétablir le dialogue afin d’éviter le recours à la voie judiciaire.',
    icon: Handshake,
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case1',
    title: 'Conflit Hiérarchique',
    sector: 'Secteur Logistique (PME)',
    context: 'Tensions vives entre un chef d\'équipe et un salarié, menant à des arrêts maladie répétés et une baisse de productivité de l\'équipe.',
    intervention: 'Entretiens individuels confidentiels suivis de trois séances plénières pour identifier les non-dits et les besoins de reconnaissance de chaque partie.',
    outcome: 'Reprise du travail, mise en place d\'une charte de communication interne co-rédigée par les parties.'
  },
  {
    id: 'case2',
    title: 'Rupture de Dialogue Associés',
    sector: 'Start-up Tech',
    context: 'Deux associés en désaccord stratégique profond, bloquant les décisions vitales pour l\'entreprise.',
    intervention: 'Médiation axée sur la distinction entre les rôles opérationnels et la vision stratégique. Sécurisation des échanges.',
    outcome: 'Réorganisation de la gouvernance et signature d\'un nouveau pacte d\'associés, évitant la dissolution de la société.'
  },
  {
    id: 'case3',
    title: 'Harcèlement Moral Ressenti',
    sector: 'Administration (DOM)',
    context: 'Plainte interne d\'un agent se sentant harcelé par sa direction suite à une réorganisation de service.',
    intervention: 'Mise à plat des processus de changement et clarification des nouvelles fiches de poste via un tiers neutre.',
    outcome: 'Apaisement des tensions, le sentiment de harcèlement a laissé place à une compréhension des contraintes organisationnelles.'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Qu'est-ce que la médiation professionnelle ?",
    answer: "La médiation est un processus structuré, volontaire et confidentiel de résolution amiable des différends. Un tiers neutre, indépendant et impartial (le médiateur) accompagne les parties pour les aider à trouver elles-mêmes une solution mutuellement acceptable."
  },
  {
    question: "Quelle est la différence entre un médiateur et un avocat ?",
    answer: "L'avocat conseille et défend les intérêts d'une seule partie, souvent dans une logique de confrontation judiciaire. Le médiateur ne donne pas d'avis juridique et ne tranche pas le litige ; il facilite le dialogue pour que les parties co-construisent leur propre solution."
  },
  {
    question: "Combien de temps dure une médiation ?",
    answer: "La durée est variable selon la complexité du dossier, mais elle est beaucoup plus rapide qu'une procédure judiciaire. En général, une médiation en entreprise se dénoue en 2 à 4 séances de quelques heures réparties sur quelques semaines."
  },
  {
    question: "La médiation est-elle confidentielle ?",
    answer: "Oui, la confidentialité est un pilier fondamental. Tout ce qui est dit ou écrit pendant la médiation ne peut être divulgué à des tiers, ni utilisé devant un tribunal, sauf accord exprès des parties."
  },
  {
    question: "Quel est le coût d'une médiation ?",
    answer: "Le coût est généralement partagé entre les parties. Il est nettement inférieur aux frais d'un procès (honoraires d'avocats sur plusieurs années, frais d'expertise, temps passé, impact sur la productivité). Un devis personnalisé est établi après le premier entretien."
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: "Pourquoi la médiation est l'avenir des RH",
    excerpt: "Découvrez comment la médiation transforme la gestion des ressources humaines en favorisant une culture du dialogue.",
    content: `
      La médiation professionnelle s'impose aujourd'hui comme un levier stratégique pour les Directions des Ressources Humaines (DRH). Loin d'être une simple méthode de résolution de conflits, elle représente un véritable changement de paradigme dans la gestion des relations sociales au sein de l'entreprise.

      ### Un gain de temps et d'argent considérable
      Les conflits non résolus coûtent cher à l'entreprise, bien au-delà des simples frais de justice. On estime que le coût caché d'un conflit (absentéisme, baisse de productivité, turn-over, désengagement) peut représenter plusieurs mois de salaire par collaborateur concerné. La médiation permet de résoudre ces situations en quelques semaines, là où une procédure judiciaire ou un conflit larvé peut durer des années.

      ### Préserver et renforcer la marque employeur
      Dans un marché du travail tendu, l'attractivité d'une entreprise dépend de sa capacité à gérer l'humain. Une entreprise qui privilégie le dialogue à l'affrontement renforce son image de marque employeur. Les collaborateurs se sentent écoutés et respectés, même dans les moments de désaccord. Cela crée un sentiment de sécurité psychologique indispensable à l'innovation et à la performance collective.

      ### Développer une véritable culture du dialogue
      En intégrant la médiation dans ses processus RH, l'entreprise apprend à ses managers et collaborateurs à communiquer autrement. Le médiateur ne se contente pas de résoudre un problème ponctuel ; il transmet, par sa pratique, des outils de communication non-violente et d'écoute active. C'est un investissement sur le long terme pour un climat social apaisé et une organisation plus résiliente.

      ### La médiation comme outil de prévention
      Au-delà de la résolution de crise, la médiation peut être utilisée de manière préventive lors de réorganisations majeures, de fusions-acquisitions ou de changements de gouvernance. Elle permet d'anticiper les résistances et de co-construire le futur de l'entreprise avec les équipes, limitant ainsi l'émergence de risques psychosociaux (RPS).
    `,
    date: "15 Mars 2024",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800&auto=format&fit=crop",
    category: "RH & Management"
  },
  {
    id: '2',
    title: "Gérer les conflits entre associés : les clés du succès",
    excerpt: "Les désaccords entre fondateurs peuvent couler une start-up. Apprenez à les anticiper et à les résoudre.",
    content: `
      Le "divorce" entre associés est l'une des premières causes d'échec des jeunes entreprises et des start-ups. Pourtant, le conflit n'est pas une fatalité s'il est identifié et traité avec les bons outils. La médiation offre un espace sécurisé pour aborder les sujets tabous et préserver la valeur de l'entreprise.

      ### Identifier les signaux faibles avant l'explosion
      Un conflit entre associés ne naît jamais du jour au lendemain. Il commence souvent par des signaux faibles : un manque de communication, des décisions prises unilatéralement, des tensions lors des réunions stratégiques ou un déséquilibre ressenti dans l'investissement personnel. Apprendre à repérer ces alertes est la première étape pour sauver l'aventure entrepreneuriale.

      ### Le rôle crucial du médiateur neutre et impartial
      Le médiateur n'est ni un juge, ni un arbitre, ni un conseiller. Il n'est pas là pour donner raison à l'un ou à l'autre, mais pour restaurer la qualité de la relation. Son rôle est de permettre à chacun d'exprimer ses besoins profonds, ses peurs et ses attentes professionnelles sans crainte d'être jugé. Cette neutralité est la clé pour sortir des postures défensives et retrouver une vision commune.

      ### Sécuriser l'avenir stratégique de l'entreprise
      La médiation permet souvent de clarifier les rôles de chacun, de redéfinir la stratégie globale ou, si nécessaire, de négocier une sortie honorable pour l'un des associés. En évitant une bataille juridique destructrice, les associés préservent la réputation de l'entreprise auprès des investisseurs, des clients et des employés.

      ### Co-construire un nouveau pacte d'associés
      L'issue d'une médiation réussie se traduit souvent par la rédaction d'un protocole d'accord qui peut servir de base à la mise à jour du pacte d'associés. Ce document, co-construit par les parties, a beaucoup plus de chances d'être respecté sur le long terme qu'une décision imposée par un tiers.
    `,
    date: "10 Mars 2024",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
    category: "Stratégie"
  },
  {
    id: '3',
    title: "Médiation à distance : est-ce vraiment efficace ?",
    excerpt: "La visioconférence a changé nos habitudes. Analyse de l'efficacité de la médiation digitale.",
    content: `
      Avec la généralisation du télétravail et l'internationalisation des échanges, la médiation à distance (ou e-médiation) est devenue une pratique courante. Mais peut-on vraiment recréer la confiance et la connexion humaine derrière un écran ? La réponse est un oui nuancé, soutenu par l'expérience terrain.

      ### Les avantages insoupçonnés de la visioconférence
      Paradoxalement, la distance physique peut parfois aider à apaiser les tensions les plus vives. Le fait d'être dans son propre environnement (chez soi ou dans son bureau) procure un sentiment de sécurité qui facilite l'expression des émotions. De plus, elle offre une flexibilité géographique totale, permettant d'intervenir rapidement pour des équipes dispersées ou basées dans les territoires d'outre-mer.

      ### Les prérequis techniques et éthiques indispensables
      Pour qu'une médiation à distance réussisse, le cadre doit être encore plus rigoureux qu'en présentiel. La qualité de la connexion internet est un prérequis, mais c'est surtout le respect strict de la confidentialité qui prime. Chaque participant doit s'engager à être seul dans une pièce fermée, sans enregistrement possible. Le médiateur doit redoubler de vigilance pour capter les signaux non-verbaux via la caméra.

      ### Un taux de réussite comparable au présentiel
      Les études récentes et notre propre pratique montrent que le taux d'accord en médiation à distance est équivalent à celui du présentiel. L'efficacité ne dépend pas du support technologique, mais de la posture du médiateur et de la volonté sincère des parties de trouver une issue. La technologie n'est qu'un outil au service du processus humain.

      ### Vers une médiation hybride ?
      L'avenir de la médiation professionnelle semble se diriger vers des modèles hybrides, combinant entretiens individuels en visioconférence pour la préparation et séances plénières en présentiel pour la finalisation de l'accord. Cette approche permet d'allier efficacité logistique et force de la rencontre humaine.
    `,
    date: "05 Mars 2024",
    image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=800&auto=format&fit=crop",
    category: "Innovation"
  }
];