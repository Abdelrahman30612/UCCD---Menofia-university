import React from 'react';
import { TeamMember, TeamData } from '../types';

interface TeamSectionProps {
    data: TeamData;
}

const MemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
    const placeholderImageUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=0284c7&color=fff&size=300`;
    
    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        e.currentTarget.src = placeholderImageUrl;
    };

    return (
        <div className="bg-gray-800 text-center rounded-lg p-6 shadow-xl transform hover:-translate-y-2 transition-transform duration-300 ease-in-out flex flex-col items-center">
            <img
                src={member.imageUrl}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-700 object-cover"
                onError={handleImageError}
            />
            <h3 className="text-xl font-bold text-white">{member.name}</h3>
            <p className="text-amber-400">{member.jobTitle}</p>
        </div>
    );
};


const TeamSection: React.FC<TeamSectionProps> = ({ data }) => {
    const { team, volunteers } = data;

    if (team.length === 0 && volunteers.length === 0) {
        return <div className="text-center py-16 text-gray-400">لا يوجد أعضاء فريق لعرضهم حاليًا.</div>;
    }

    return (
        <section id="team" className="py-16">
            {team.length > 0 && (
                <div>
                    <h2 className="text-4xl font-bold text-center mb-12 text-amber-400">فريق العمل</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <MemberCard key={`team-${index}`} member={member} />
                        ))}
                    </div>
                </div>
            )}
            
            {volunteers.length > 0 && (
                <div className={team.length > 0 ? "mt-20" : ""}>
                    <h2 className="text-4xl font-bold text-center mb-12 text-amber-400">المتطوعين</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {volunteers.map((member, index) => (
                           <MemberCard key={`volunteer-${index}`} member={member} />
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
};

export default TeamSection;
