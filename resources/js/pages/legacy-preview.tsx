import React from 'react';
import LegacyLayout from '../components/legacy-layout';
import PageHeading from '../components/PageHeading';
import JobCard from '../components/JobCard';
import JobCardWide from '../components/JobCardWide';
import SectionHeading from '../components/SectionHeading';
import Tag from '../components/Tag';

interface Employer {
    name: string;
    logo: string;
}

interface TagType {
    id: number;
    name: string;
}

interface Job {
    id: number;
    employer: Employer;
    title: string;
    salary: string;
    url: string;
    tags: TagType[];
}

const jobs: Job[] = [
    // Для JobCard (9 вакансий, каждая с 3 тегами)
    {
        id: 1,
        employer: { name: 'Tech Corp', logo: 'logos/tech-corp.png' },
        title: 'Senior React Developer',
        salary: '$120,000 - $150,000',
        url: 'https://example.com/jobs/1',
        tags: [
            { id: 1, name: 'React' },
            { id: 2, name: 'TypeScript' },
            { id: 3, name: 'Tailwind' },
        ],
    },
    {
        id: 2,
        employer: { name: 'Innovate Inc', logo: 'logos/innovate-inc.png' },
        title: 'Backend Engineer',
        salary: '$100,000 - $130,000',
        url: 'https://example.com/jobs/2',
        tags: [
            { id: 4, name: 'Node.js' },
            { id: 5, name: 'Express' },
            { id: 6, name: 'MongoDB' },
        ],
    },
    {
        id: 3,
        employer: { name: 'Data Solutions', logo: 'logos/data-solutions.png' },
        title: 'Data Scientist',
        salary: '$110,000 - $140,000',
        url: 'https://example.com/jobs/3',
        tags: [
            { id: 7, name: 'Python' },
            { id: 8, name: 'Machine Learning' },
            { id: 9, name: 'Pandas' },
        ],
    },
    {
        id: 4,
        employer: { name: 'Cloud Systems', logo: 'logos/cloud-systems.png' },
        title: 'DevOps Engineer',
        salary: '$115,000 - $145,000',
        url: 'https://example.com/jobs/4',
        tags: [
            { id: 10, name: 'AWS' },
            { id: 11, name: 'Docker' },
            { id: 12, name: 'Kubernetes' },
        ],
    },
    {
        id: 5,
        employer: { name: 'Web Innovators', logo: 'logos/web-innovators.png' },
        title: 'Frontend Developer',
        salary: '$90,000 - $120,000',
        url: 'https://example.com/jobs/5',
        tags: [
            { id: 1, name: 'React' },
            { id: 13, name: 'Vue' },
            { id: 3, name: 'Tailwind' },
        ],
    },
    {
        id: 6,
        employer: { name: 'AI Labs', logo: 'logos/ai-labs.png' },
        title: 'AI Research Engineer',
        salary: '$130,000 - $160,000',
        url: 'https://example.com/jobs/6',
        tags: [
            { id: 7, name: 'Python' },
            { id: 14, name: 'TensorFlow' },
            { id: 15, name: 'PyTorch' },
        ],
    },
    {
        id: 7,
        employer: { name: 'Game Studio', logo: 'logos/game-studio.png' },
        title: 'Game Developer',
        salary: '$95,000 - $125,000',
        url: 'https://example.com/jobs/7',
        tags: [
            { id: 16, name: 'Unity' },
            { id: 17, name: 'C#' },
            { id: 18, name: 'Unreal Engine' },
        ],
    },
    {
        id: 8,
        employer: { name: 'FinTech Solutions', logo: 'logos/fintech-solutions.png' },
        title: 'Blockchain Developer',
        salary: '$125,000 - $155,000',
        url: 'https://example.com/jobs/8',
        tags: [
            { id: 19, name: 'Solidity' },
            { id: 20, name: 'Ethereum' },
            { id: 21, name: 'Web3' },
        ],
    },
    {
        id: 9,
        employer: { name: 'Cyber Security', logo: 'logos/cyber-security.png' },
        title: 'Security Engineer',
        salary: '$105,000 - $135,000',
        url: 'https://example.com/jobs/9',
        tags: [
            { id: 22, name: 'Cybersecurity' },
            { id: 23, name: 'Penetration Testing' },
            { id: 24, name: 'Network Security' },
        ],
    },
    // Для JobCardWide (3 вакансии, каждая с 3 тегами)
    {
        id: 10,
        employer: { name: 'Health Tech', logo: 'logos/health-tech.png' },
        title: 'Mobile Developer',
        salary: '$100,000 - $130,000',
        url: 'https://example.com/jobs/10',
        tags: [
            { id: 25, name: 'React Native' },
            { id: 26, name: 'Swift' },
            { id: 27, name: 'Kotlin' },
        ],
    },
    {
        id: 11,
        employer: { name: 'Edu Platform', logo: 'logos/edu-platform.png' },
        title: 'Full Stack Developer',
        salary: '$110,000 - $140,000',
        url: 'https://example.com/jobs/11',
        tags: [
            { id: 1, name: 'React' },
            { id: 4, name: 'Node.js' },
            { id: 28, name: 'PostgreSQL' },
        ],
    },
    {
        id: 12,
        employer: { name: 'Green Energy', logo: 'logos/green-energy.png' },
        title: 'Embedded Systems Engineer',
        salary: '$115,000 - $145,000',
        url: 'https://example.com/jobs/12',
        tags: [
            { id: 29, name: 'C++' },
            { id: 30, name: 'RTOS' },
            { id: 31, name: 'IoT' },
        ],
    },
];

// Извлечение уникальных тегов
const uniqueTags: TagType[] = Array.from(
    new Map(
        jobs
            .flatMap((job) => job.tags)
            .map((tag) => [tag.id, tag])
    ).values()
);

const LegacyPreview: React.FC = () => {
    return (
        <LegacyLayout>
            <PageHeading>Results</PageHeading>

            <div className="flex flex-wrap gap-4">
                {jobs.slice(0, 9).map((job) => (
                    <div key={job.id} className="w-[calc(33.333%-1rem)]">
                        <JobCard job={job} />
                    </div>
                ))}
            </div>

            <div className="mt-8">
                <SectionHeading>Тег</SectionHeading>
                <div className="flex flex-wrap gap-2 mt-4">
                    {uniqueTags.map((tag) => (
                        <Tag key={tag.id} tag={tag} size="base" />
                    ))}
                </div>
            </div>

            <div className="space-y-6 mt-8">
                {jobs.slice(9, 12).map((job) => (
                    <JobCardWide key={job.id} job={job} />
                ))}
            </div>
        </LegacyLayout>
    );
};

export default LegacyPreview;
