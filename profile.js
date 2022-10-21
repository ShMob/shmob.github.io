$(document).ready(function(){
    var education = [
        {
            institute: "Iran University of Science and Technology",
            degree: "Bachelor's degree, Computer Engineering",
            date: "Sep 2018 - Sep 2022",
            desc: "Rank 2 with grade 18.98 / 20",
            logo: "iust.png"
        },
        {
            institute: "Sharif University of Technology",
            degree: "Master's degree, Computer Engineering, Artificial Intelligence",
            date: "Sep 2022 - present",
            desc: "",
            logo: "sharif.png"
        }
    ]
    const $edu = $('#education'); 
    for(let education_info of education){ 
        const $edu_part = $(`<div class="exp-part">
        <img src=${education_info.logo}>
        <div class="exp-part-inner">
            <h3>${education_info.institute}</h3>
            <div class="text-body">${education_info.degree}</div>
            <div class="text-body-small">${education_info.date}</div>
            <p class="text-body">${education_info.desc}</p>
        </div>
        </div>
        <hr />
        `);
        $edu.append($edu_part);
    }

    var experience = [
        {
            institute: "Iran University of Science and Technology",
            duration: "",
            date: "Tehran, Iran",
            parts: [
                {
                role: "NLP Research Assistant & Front-end developer",
                conditions: "Natural Language Processing Lab of Dr. Eetemadi - Part-time",
                date: "Mar 2022 - Sep 2022",
                desc:"Research about Visual Question Answering and Image Captioning tasks,\nClient-side development of the lab's website",
                skills: "Natural Language Processing, Computer Vision, VQA, Image Captioning, ReactJS development"
            },
            {
                role: "NLP Intern & Front-end developer",
                conditions: "Natural Language Processing Lab of Dr. Eetemadi - Internship",
                date: "Aug 2021 - Mar 2022",
                desc:"Research about Visual Question Answering,\nClient-side development of the lab's website",
                skills: "Natural Language Processing, Computer Vision, VQA, ReactJS development"
            }
        ],
            logo: "iust.png"
        }
    ]

    const $exp = $('#experience'); 
    for(let experience_info of experience){ 
        var parts = ""
        experience_info.parts.forEach(function (p, i) {
            parts = parts.concat(`<div class="exp-part">
            <div class="exp-under-logo">
            <div class="circle" />
            <div class="vertical-line" style="display:${i == experience_info.parts.length - 1 ?'none': 'block'}" />
            </div>
            <div class="exp-part-inner">
                <h3>${p.role}</h3>
                <div class="text-body">${p.conditions}</div>
                <div class="text-body-small">${p.date}</div>
                <p class="text-body">${p.desc}</p>
                <div class="text-body"><div style="font-weight:bold;display: contents">Skills: </div>${p.skills}</div>
            </div>
            </div>`)
        })
        const $exp_part = $(`<div class="exp-part original">
        <img src=${experience_info.logo}>
        <div class="exp-part-inner">
            <h3>${experience_info.institute}</h3>
            <div class="text-body">${experience_info.duration}</div>
            <div class="text-body-small">${experience_info.date}</div>
        </div>
        </div>
        ${parts}
        <hr />
        `);
        $exp.append($exp_part);
    }

    var courses = [
        {
            course: "Deep Learning Specialization",
            publisher: "Coursera",
            date: "issued Sep 2021",
            desc: "This specialization includes the following courses:\nNeural Networks and Deep Learning, \
Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization, \
Structuring Machine Learning Projects, Convolutional Neural Networks, Sequence Models",
            logo: "coursera.jfif",
            link: "https://www.coursera.org/account/accomplishments/specialization/certificate/W6XFM8QVK5AZ"
        },
        {
            course: "Data Structures and Algorithms Specialization",
            publisher: "Coursera",
            date: "issued Sep 2020",
            desc: "This specialization includes the following courses:\nAdvanced Algorithms and Complexity, \
Algorithmic Toolbox, Algorithms on Graphs, Algorithms on Strings, Data Structures, Genome Assembly Programming Challenge",
            logo: "coursera.jfif",
            link: "https://www.coursera.org/account/accomplishments/specialization/certificate/DWZEZ72XEK3N"
        }
    ]
    const $cert = $('#certification'); 
    for(let info of courses){ 
        const $cert_part = $(`<div class="exp-part">
        <img src=${info.logo}>
        <div class="exp-part-inner">
            <h3>${info.course}<a href=${info.link} target="_blank" rel="noopener noreferrer"><object data="external-link.svg" type="image/svg+xml"></object></a></h3>
            <div class="text-body">${info.publisher}</div>
            <div class="text-body-small">${info.date}</div>
            <p class="text-body">${info.desc}</p>
        </div>
        </div>
        <hr />
        `);
        $cert.append($cert_part);
    }

    var projects = [
        {
            name: "The Deadly Paradise: a pixel RPG game",
            associated_with: "for Dr. Behruz Minaei's Game Development course",
            date: "Nov 2021 - Feb 2022",
            desc: "Implemented using Unity game engine and C# language",
            link: "https://github.com/Parisa78/The_Deadly_Paradise"
        },
        {
            name: "BShop: an online shop containing other shops!",
            associated_with: "for Dr. Mehrdad Ashtiani's Software Engineering course",
            date: "Mar 2021 - Jul 2021",
            desc: "Front-end development with ReactJS",
            link: "https://github.com/Parisa78/Eunoia_team"
        },
        {
            name: "Commutive: A social networking service",
            associated_with: "for Dr. Mehrdad Ashtiani's Systems Design and Analysis course",
            date: "Oct 2020 - Jan 2021",
            desc: "Front-end development with ReactJS",
            link: "https://gitlab.com/teamlento/project/-/tree/dev"
        },
        {
            name: "OpenUnderstand",
            associated_with: "for Dr. Saeed Parsa's Compiler Design course",
            date: "Oct 2020 - Jan 2021",
            desc: "Implementation of a part of open source Understand Python API",
            link: "https://github.com/ShMob/OpenUnderstand"
        },
        {
            name: "City Breaker: A 3D Brick Breaker game remake",
            associated_with: "for Dr. Behruz Minaei's Game Development course",
            date: "Nov 2021",
            desc: "Implemented using Unity game engine and C# language",
            link: "https://github.com/ShMob/city-breaker"
        },
        {
            name: "FlappyBird",
            associated_with: "for Dr. Behruz Minaei's Game Development course",
            date: "Nov 2021",
            desc: "Exam project (implemented in 2 hours) using Unity game engine and C# language",
            link: "https://github.com/ShMob/FlappyBird"
        }
    ]
    const $proj = $('#projects'); 
    for(let info of projects){ 
        const $proj_part = $(`<div class="exp-part project-part">
        <div class="exp-part-inner">
            <h3>${info.name}<a href=${info.link} target="_blank" rel="noopener noreferrer"><object data="external-link.svg" type="image/svg+xml"></object></a></h3>
            <div class="text-body">${info.associated_with}</div>
            <div class="text-body-small">${info.date}</div>
            <p class="text-body">${info.desc}</p>
        </div>
        </div>
        <hr />
        `);
        $proj.append($proj_part);
    }

    skills=[
        ["Deep Learning", 4],
        ["Natural Language Processing", 4],
        ["Front-end Development", 3.5],
        ["Game Development", 3],
        ["ReactJS", 3.5],
        ["Unity Engine", 3],
        ["Keras", 2.5],
        ["Pytorch", 4],
        ["C#", 4],
        ["Python", 3.5],
        ["Javascript", 3],
        ["HTML & CSS", 2.5],
        ["C language", 2],
        ["C++", 2],
        ["Git", 2.5],
        ["Restful API",3],
        ["Scrum", 2.5],
        ["SQL Server",1.5],
        ["Django", 1.5],
        ["OracleDB", 2],
        ["Assembly programming", 2],
        ["Verilog & VHDL", 2],
        ["Adobe Photoshop", 1],
        ["Unit Testing", 1]
    ]

    const $skills = $('#skills'); 
    for(let info of skills){ 
        const $skills_part = $(`<div class="exp-part skills-part project-part">
        <div>
        ${info[0]}
        <div class="score-container">
        <div style="width:${info[1]* 100 / 5 + "%"}; height: 15px; margin: 2px 0 5px 0 ; background-color: #33aba3; transition: width 1s; border-radius: 5px"/>
        </div>
        </div>
        `);
        $skills.append($skills_part);
    }
})