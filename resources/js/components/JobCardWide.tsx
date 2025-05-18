import React from 'react';
import Panel from './Panel';
import EmployerLogo from './EmployerLogo';
import Tag from './Tag';

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

interface JobCardWideProps {
    job: Job;
}

const JobCardWide: React.FC<JobCardWideProps> = ({ job }) => {
    return (
        <Panel className="flex gap-x-6">
            <div>
                <EmployerLogo employer={job.employer} />
            </div>

            <div className="flex-1 flex flex-col">
                <a
                    href="#"
                    className="self-start text-sm text-gray-400 transition-colors duration-300"
                >
                    {job.employer.name}
                </a>

                <h3 className="font-bold text-xl mt-3 group-hover:text-blue-800">
                    <a href={job.url} target="_blank" rel="noopener noreferrer">
                        {job.title}
                    </a>
                </h3>

                <p className="text-sm text-gray-400 mt-auto">{job.salary}</p>
            </div>

            <div>
                {job.tags.map((tag) => (
                    <Tag key={tag.id} tag={tag} />
                ))}
            </div>
        </Panel>
    );
};

export default JobCardWide;
