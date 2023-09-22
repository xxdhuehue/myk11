import TeamMemberCard from "./teamMemberCard";

const memberList = [
    {
        url: 'https://webmedia.nwd.com.hk/drupal/sites/default/files/portraits-adrian-cheng-2022.jpg',
        name: 'ADRIAN CHENG',
        description: 'Appointed as an Executive Director in March 2007, became Executive'
    },
    {
        url: 'https://webmedia.nwd.com.hk/drupal/sites/default/files/portraits-adrian-cheng-2022.jpg',
        name: 'ADRIAN CHENG',
        description: 'Appointed as an Executive Director in March 2007, became Executive'
    },
    {
        url: 'https://webmedia.nwd.com.hk/drupal/sites/default/files/portraits-adrian-cheng-2022.jpg',
        name: 'ADRIAN CHENG',
        description: 'Appointed as an Executive Director in March 2007, became Executive'
    },
    {
        url: 'https://webmedia.nwd.com.hk/drupal/sites/default/files/portraits-adrian-cheng-2022.jpg',
        name: 'ADRIAN CHENG',
        description: 'Appointed as an Executive Director in March 2007, became Executive'
    },
    {
        url: 'https://webmedia.nwd.com.hk/drupal/sites/default/files/portraits-adrian-cheng-2022.jpg',
        name: 'ADRIAN CHENG',
        description: 'Appointed as an Executive Director in March 2007, became Executive'
    }
]

const TeamManagement = () => {
    return (
        <>
            <div className="border-b h-16 text-3xl text-center text-gray-600">MANAGEMENT TEAM</div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4  2xl:grid-cols-6">
                {
                    memberList.map(item => {
                        return <TeamMemberCard key={item.url} url={item.url} name={item.name} description={item.description}/>
                    })
                }
            </div>
        </>
    )
}

export default TeamManagement;