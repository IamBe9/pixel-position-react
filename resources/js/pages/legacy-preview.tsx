import React from 'react';
import { Head } from '@inertiajs/react';
import LegacyLayout from '@/layouts/legacy-layout';

const jobs = [
    {
        title: "Software Engineer",
        salary: "$120,000",
        employer: { name: "Tech Corp", logo: "/images/tech-corp-logo.svg" },
        url: "#",
        tags: ["React", "JavaScript", "Full-time"]
    },
    {
        title: "Product Manager",
        salary: "$95,000",
        employer: { name: "Innovate Inc.", logo: "/images/innovate-logo.svg" },
        url: "#",
        tags: ["Agile", "Leadership", "Full-time"]
    },
    {
        title: "Data Scientist",
        salary: "$110,000",
        employer: { name: "DataWorks", logo: "/images/data-works-logo.svg" },
        url: "#",
        tags: ["Python", "Machine Learning", "Full-time"]
    }
];

export default function LegacyPreview() {
    return (
        <LegacyLayout>
            <Head title="Legacy Preview" />
            <h1 className="font-bold text-center text-4xl mb-8">Job Listings</h1>

            <div className="space-y-6">
                {jobs.map((job, index) => (
                    <div key={index} className="p-4 bg-white/5 rounded-xl border border-transparent hover:border-blue-800 group transition-colors duration-300">
                        <div className="flex gap-x-6">
                            <div>
                                <img src={job.employer.logo} alt={job.employer.name} className="rounded-xl" width={90} />
                            </div>

                            <div className="flex-1 flex flex-col">
                                <a href="#" className="self-start text-sm text-gray-400 transition-colors duration-300">{job.employer.name}</a>

                                <h3 className="font-bold text-xl mt-3 group-hover:text-blue-800">
                                    <a href={job.url} target="_blank">
                                        {job.title}
                                    </a>
                                </h3>

                                <p className="text-sm text-gray-400 mt-auto">{job.salary}</p>
                            </div>

                            <div>
                                {job.tags.map((tag, tagIndex) => (
                                    <a
                                        key={tagIndex}
                                        href={`/tags/${tag.toLowerCase()}`}
                                        className="bg-white/10 hover:bg-white/25 rounded-xl font-bold transition-colors duration-300 px-5 py-1 text-sm"
                                    >
                                        {tag}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </LegacyLayout>
    );
}
