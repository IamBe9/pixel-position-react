import React from 'react';
import Panel from './Panel';
import Tag from './Tag';
import EmployerLogo from './EmployerLogo';

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

interface JobCardProps {
    job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
    return (
        <Panel className="flex flex-col text-center">
            <div className="self-start text-sm">{job.employer.name}</div>

            <div className="py-8">
                <h3 className="group-hover:text-blue-800 text-xl font-bold transition-colors duration-300">
                    <a href={job.url} target="_blank" rel="noopener noreferrer">
                        {job.title}
                    </a>
                </h3>
                <p className="text-sm mt-4">{job.salary}</p>
            </div>

            <div className="flex justify-between items-center mt-auto">
                <div>
                    {job.tags.map((tag) => (
                        <Tag key={tag.id} tag={tag} size="small" />
                    ))}
                </div>

                <EmployerLogo employer={job.employer} width={42} />
            </div>
        </Panel>
    );
};

export default JobCard;
