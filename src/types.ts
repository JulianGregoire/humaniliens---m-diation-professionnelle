export interface ServiceItem {
    id: string;
    title: string;
    description: string;
    icon: any;
}

export interface CaseStudy {
    id: string;
    title: string;
    sector: string;
    context: string;
    intervention: string;
    outcome: string;
}

export interface NavLink {
    label: string;
    href: string;
}

export interface FAQItem {
    question: string;
    answer: string;
}

export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    image: string;
    category: string;
}

export interface Review {
    id: string;
    author: string;
    avatar?: string;
    rating: number;
    date: string;
    text: string;
    isGoogleReview?: boolean;
}
