import { ProfileUser } from '../models/profile-user';

export const users: ProfileUser[] = [
    {
        id: 1,
        info: {
            name: 'Yuliia Chudina',
            icon: 'assets/img/user_1.png',
            profile: 'UX/UI Designer',
            lastStateId: 2,
            social_media: {
                mail: 'yuliia.chudina@gmail.com',
                phone: '+380 93 350 24 32',
                telegram: {
                    username: '@chudiina',
                    link: 'https://t.me/stih07'
                },
                linkedin: 'https://www.linkedin.com/in/galina-orishich-a89b69169/'
            },
        },

        activity: {
            totalDays: {
                average: 10,
                current: 8,
            },
            formDays: {
                average: 1,
                current: 1,
            },
            testDays: {
                average: 3,
                current: 3,
                mistakes: 5
            },
            practiceDays: {
                average: 3,
                current: 3,
                mistakes: 3,
            },
        },

        userStateId: null,
        canMakeDecision: null,

        genInfo: {
            studyingTime: {
                began: '12-03-2020',
                finished: '--',
            },
            education: {
                institution: 'КЗИ ОНАС',
                faculty: 'Разработчик ПО 4 курс',
                otherAchievements: '3 класса музікальной школі, зборная колледжа по волейболу',
            },
            // tslint:disable-next-line:max-line-length
            motivation: 'Хочу получать акутульное образование сфере ИТ и находиться среди ребят, который любят и ценят самообразование. Так же всегда мечтала заниматься инетресным делом и получать от этого удовольствие. Хочу получать акуаульно образование сфере ИТ и находиться среди ребят, который любят и ценят самообразование. Так же всегда мечтала заниматься который любят...',
            tableHardSkill: [
                // ничего - 0, не знаю - 1, читал немного - 2, хорошо знаю - 3, постоянно пишу - 4
                { name: 'PHP', userRating: 4 },
                { name: 'SQL', userRating: 3 },
                { name: 'Front-end', userRating: 4 },
            ],
            tableSoftSkill: [
                // ничего - 0, сильная сторона - 1, слабая сторона - 2, стоит поработать - 3
                { name: 'Критическое мышление', userRating: 1 },
                { name: 'Усидчивость', userRating: 3 },
                { name: 'Коммуникабельность', userRating: 2 },
            ],
        },

        testTasks: [
            {
                name: 'SQL',
                status: 1,
                daysSpent: 5,
                result: {
                    points: 7,
                    maxPossiblePoints: 10,
                },
                mistakes: 5,
                source: {
                    nameFile: 'website-wireframe',
                    type: 'psd',
                    size: '45.9 MB',
                }
            },
          {
                name: 'PHP',
                status: 0,
                daysSpent: 5,
                result: {
                    points: 7,
                    maxPossiblePoints: 10,
                },
                mistakes: 5,
                source: {
                    nameFile: 'website-wireframe',
                    type: 'psd',
                    size: '45.9 MB',
                }
            }
        ],

        practiceTasks: [
            {
                name: 'PHP',
                // status: 0 == IN PROGRESS, status: 1 == DONE
                status: 1,
                daysSpent: 5,
                rating: {
                    points: 40,
                    maxPossiblePoints: 50,
                },
                // tslint:disable-next-line:max-line-length
                feedback: 'Кандидат хорошо владеет базовыми знаниями (типы переменнных и операции над ними), небольшой опыт владения классами, льём водичку для красо...',
                tableRating: [
                    // ничего - 0, не знаю - 1, читал немного - 2, хорошо знаю - 3, постоянно пишу - 4
                    { name: 'Самооценка', userRating: 4 },
                    { name: 'Оценка ментора', mentorRating: 3 },
                ],
                source: {
                    nameFile: 'name_of_file',
                    type: 'png',
                    size: '45 MB',
                }
            }
        ],

        softSkill: [
            // ничего - 0, сильная сторона - 1, стоит поработать - 2, слабая сторона - 3
            { name: 'Критическое мышление', userRating: 1, mentorRating: 1 },
            { name: 'Коммуникабельность', userRating: 1, mentorRating: 2 },
            { name: 'Командная работа', userRating: 2, mentorRating: 0 },
            { name: 'Выносливость', userRating: 3, mentorRating: 0 },
        ]
    },

    {
        id: 2,
        info: {
            name: 'Alexandr Yatsenko',
            icon: 'https://i.imgur.com/snZND45.jpg',
            profile: 'UX/UI Designer',
            lastStateId: 2,
            social_media: {
                mail: 'alexender.yatsenko@gmail.com',
                phone: '+380 98 787 10 90',
                telegram: {
                    username: '@alexend6r',
                    link: 'https://t.me/alexend6r'
                },
                linkedin: null
            },
        },

        activity: {
            totalDays: {
                average: 10,
                current: 7,
            },
            formDays: {
                average: 1,
                current: 1,
            },
            testDays: {
                average: 3,
                current: 3,
                mistakes: 3,
            },
            practiceDays: {
                average: 3,
                current: 2,
                mistakes: 1,
            },
        },

        userStateId: null,
        canMakeDecision: null,

        genInfo: {
            studyingTime: {
                began: '05-08-20217',
                finished: '--',
            },
            education: {
                institution: 'КЗИ ОНАС',
                faculty: 'Инженерия ПО 1 курс',
                otherAchievements: '5 лет плаванья, основал студию звукозаписи',
            },
            // tslint:disable-next-line:max-line-length
            motivation: 'Меня пригласили в атом, я не знал что это такое, а после дизайна я не помню чем хотел заняться',
            tableHardSkill: [
                // ничего - 0, не знаю - 1, читал немного - 2, хорошо знаю - 3, постоянно пишу - 4
                { name: 'Figma', userRating: 3 },
                { name: 'UI/UX', userRating: 4 },
                { name: 'Painting', userRating: 2 },
            ],
            tableSoftSkill: [
                // ничего - 0, сильная сторона - 1, слабая сторона - 2, стоит поработать - 3
                { name: 'Критическое мышление', userRating: 1 },
                { name: 'Усидчивость', userRating: 2 },
                { name: 'Коммуникабельность', userRating: 1 },
            ],
        },

        testTasks: [
            {
                name: 'UI/UX',
                status: 1,
                daysSpent: 6,
                result: {
                    points: 9,
                    maxPossiblePoints: 10,
                },
                mistakes: 2,
                source: {
                    nameFile: 'website-wireframe',
                    type: 'psd',
                    size: '45.9 MB',
                }
            },
        ],

        practiceTasks: [],

        softSkill: [
            // ничего - 0, сильная сторона - 1, стоит поработать - 2, слабая сторона - 3
            { name: 'Критическое мышление', userRating: 1, mentorRating: 1 },
            { name: 'Коммуникабельность', userRating: 1, mentorRating: 1 },
            { name: 'Командная работа', userRating: 2, mentorRating: 1 },
            { name: 'Выносливость', userRating: 2, mentorRating: 3 },
        ]
    },
    {
        id: 3,
        info: {
            name: 'Maria Kutyrkina',
            icon: 'https://i.imgur.com/OtKzT2u.jpg',
            profile: 'UX/UI Designer',
            lastStateId: 2,
            social_media: {
                mail: 'mariekuterie@gmail.com',
                phone: '+380 98 365 85 59',
                telegram: {
                    username: '@mary_kuter',
                    link: 'https://t.me/mary_kuter'
                },
                linkedin: 'https://www.linkedin.com/in/marie-kutyrkina-8231241b3/'
            },
        },

        activity: {
            totalDays: {
                average: 10,
                current: 9,
            },
            formDays: {
                average: 2,
                current: 1,
            },
            testDays: {
                average: 3,
                current: 2,
                mistakes: 2,
            },
            practiceDays: {
                average: 3,
                current: 3,
                mistakes: 1,
            },
        },

        userStateId: null,
        canMakeDecision: null,

        genInfo: {
            studyingTime: {
                began: '15-02-2020',
                finished: '--',
            },
            education: {
                institution: 'закончила школу',
                faculty: null,
                otherAchievements: 'закончила художественную школу, многократная чемпионка Украины по черлидингу.',
            },
            // tslint:disable-next-line:max-line-length
            motivation: 'Мотивация освоить новое для себя направление в IT и найти единомышленников,с которыми можно строить планы и достигать поставленных целей',
            tableHardSkill: [
                // ничего - 0, не знаю - 1, читал немного - 2, хорошо знаю - 3, постоянно пишу - 4
                { name: 'Figma', userRating: 2 },
                { name: 'UI/UX', userRating: 4 },
                { name: 'Painting', userRating: 4 },
            ],
            tableSoftSkill: [
                // ничего - 0, сильная сторона - 1, слабая сторона - 2, стоит поработать - 3
                { name: 'Критическое мышление', userRating: 1 },
                { name: 'Усидчивость', userRating: 2 },
                { name: 'Коммуникабельность', userRating: 2 },
            ],
        },

        testTasks: [],

        practiceTasks: [
            {
                name: 'UX/UI',
                // status: 0 == IN PROGRESS, status: 1 == DONE
                status: 1,
                daysSpent: 6,
                rating: {
                    points: 55,
                    maxPossiblePoints: 60,
                },
                // tslint:disable-next-line:max-line-length
                feedback: 'Кандидат хорошо владеет базовыми знаниями (типы переменнных и операции над ними), небольшой опыт владения классами, льём водичку для красо...',
                tableRating: [
                    // ничего - 0, не знаю - 1, читал немного - 2, хорошо знаю - 3, постоянно пишу - 4
                    { name: 'Самооценка', userRating: 4 },
                    { name: 'Оценка ментора', mentorRating: 4 },
                ],
                source: {
                    nameFile: 'name_of_file.png',
                    type: 'png',
                    size: '45mb',
                }
            }
        ],

        softSkill: [
            // ничего - 0, сильная сторона - 1, стоит поработать - 2, слабая сторона - 3
            { name: 'Критическое мышление', userRating: 1, mentorRating: 2 },
            { name: 'Коммуникабельность', userRating: 1, mentorRating: 1 },
            { name: 'Командная работа', userRating: 1, mentorRating: 2 },
            { name: 'Выносливость', userRating: 3, mentorRating: 2 },
        ]
    },

    {
        id: 4,
        info: {
            name: 'Gleb Rutskiy',
            icon: 'https://i.imgur.com/vxtF8ZR.jpg',
            profile: 'Front-end Developer',
            lastStateId: 2,
            social_media: {
                mail: 'glebrutskiy2001@gmail.com',
                phone: '+380 68 600 90 56',
                telegram: {
                    username: '@Paxton1337',
                    link: 'https://t.me/Paxton1337'
                },
                linkedin: 'https://www.linkedin.com/in/gleb-rutskiy-990ab21a8/'
            },
        },

        activity: {
            totalDays: {
                average: 10,
                current: 6,
            },
            formDays: {
                average: 1,
                current: 1,
            },
            testDays: {
                average: 3,
                current: 2,
                mistakes: 1,
            },
            practiceDays: {
                average: 3,
                current: 2,
                mistakes: 0,
            },
        },

        userStateId: null,
        canMakeDecision: null,

        genInfo: {
            studyingTime: {
                began: '15-02-2020',
                finished: '--',
            },
            education: {
                institution: 'ОНПУ ',
                faculty: 'Специализированные компьютерные системы 3 курс',
                otherAchievements: 'Занимался 10 лет танцами, 3 года плаваньем, 2 года мини-футболом, участвовал в хакатоне от HYS',
            },
            // tslint:disable-next-line:max-line-length
            motivation: 'Ворваться в IT сферу и найти хороших друзей, которые будут помогать в случае чего, стать востребованным специалистом своей отрасли',
            tableHardSkill: [
                // ничего - 0, не знаю - 1, читал немного - 2, хорошо знаю - 3, постоянно пишу - 4
                { name: 'JavaScript', userRating: 4 },
                { name: 'HTML5', userRating: 4 },
                { name: 'CSS', userRating: 4 },
            ],
            tableSoftSkill: [
                // ничего - 0, сильная сторона - 1, слабая сторона - 2, стоит поработать - 3
                { name: 'Критическое мышление', userRating: 1 },
                { name: 'Усидчивость', userRating: 1 },
                { name: 'Коммуникабельность', userRating: 1 },
            ],
        },

        testTasks: [],

        practiceTasks: [],

        softSkill: [
            // ничего - 0, сильная сторона - 1, стоит поработать - 2, слабая сторона - 3
            { name: 'Критическое мышление', userRating: 2, mentorRating: 1 },
            { name: 'Коммуникабельность', userRating: 1, mentorRating: 1 },
            { name: 'Командная работа', userRating: 2, mentorRating: 2 },
            { name: 'Выносливость', userRating: 1, mentorRating: 1 },
        ]
    },

    {
        id: 5,
        info: {
            name: 'Artyom Kazlanchi',
            icon: 'https://i.imgur.com/dxhQonP.jpg',
            profile: 'Java Backend Developer',
            lastStateId: 2,
            social_media: {
                mail: 'kazlanzhy.artyom@gmail.com',
                phone: '+380 97 094 59 24',
                telegram: {
                    username: '@kazlanchy',
                    link: 'https://t.me/kazlanchy'
                },
                linkedin: 'http://linkedin.com/in/artyom-kazlanzhy-547a2a196'
            },
        },

        activity: {
            totalDays: {
                average: 10,
                current: 6,
            },
            formDays: {
                average: 1,
                current: 1,
            },
            testDays: {
                average: 3,
                current: 2,
                mistakes: 1
            },
            practiceDays: {
                average: 3,
                current: 2,
                mistakes: 0,
            },
        },

        userStateId: null,
        canMakeDecision: null,

        genInfo: {
            studyingTime: {
                began: '16-09-2019',
                finished: '--',
            },
            education: {
                institution: 'ОНПУ',
                faculty: 'Компьютерные науки 3 курс',
                // tslint:disable-next-line:max-line-length
                otherAchievements: 'попал на стажировку в одну из самых престижных IT компаний Одессы/Украины - Provectus. Принимаю участие в разработке и развитии перспективного edu-tech продукта - UPME',
            },
            // tslint:disable-next-line:max-line-length
            motivation: 'Как только я занялся разработкой, я понял, что мне это действительно по душе и хочу заниматься этим днями и ночами. Я был обычным студентом, но который вовремя понял, что университет не даёт должных знаний. К тому же мне хотелось видеть вокруг себя единомышленников, а не ребят, которые только и думают, как бы побыстрее прийти домой и поиграть в компьютер. Мне повезло, что я знал некоторых резидентов из Atom Space, их частые рассказы и репосты в инстаграмме сыграли свою роль. Я заинтересовался этим, сейчас уже буквально священным для меня местом, а когда узнал, сколько возможностей оно предлагает взамен всего лишь на стремление развиваться, то сразу понял - это то, что мне нужно. Атом действительно уникальный проект, со своими ценностями, и только люди, которые действительно разделяют их, по настоящему понимают его значимость. Здесь я нашёл друзей-единомышленников, менторскую поддержку, уникальные возможности развития и просто место, где я могу прийти и поработать с комфортом, а когда 	    устану - поговорить с кем-то по душам на кухне',
            tableHardSkill: [
                // ничего - 0, не знаю - 1, читал немного - 2, хорошо знаю - 3, постоянно пишу - 4
                { name: 'Java', userRating: 4 },
                { name: 'SQL', userRating: 3 },
                { name: 'Back-end', userRating: 4 },
            ],
            tableSoftSkill: [
                // ничего - 0, сильная сторона - 1, слабая сторона - 2, стоит поработать - 3
                { name: 'Критическое мышление', userRating: 3 },
                { name: 'Усидчивость', userRating: 1 },
                { name: 'Коммуникабельность', userRating: 1 },
            ],
        },

        testTasks: [
            {
                name: 'SQL',
                status: 1,
                daysSpent: 4,
                result: {
                    points: 9,
                    maxPossiblePoints: 10,
                },
                mistakes: 2,
                source: {
                    nameFile: 'website-wireframe',
                    type: 'psd',
                    size: '45.9 MB',
                }
            },
        ],

        practiceTasks: [
            {
                name: 'Java',
                // status: 0 == IN PROGRESS, status: 1 == DONE
                status: 1,
                daysSpent: 5,
                rating: {
                    points: 89,
                    maxPossiblePoints: 100,
                },
                // tslint:disable-next-line:max-line-length
                feedback: 'Кандидат хорошо владеет базовыми знаниями (типы переменнных и операции над ними), небольшой опыт владения классами, льём водичку для красо...',
                tableRating: [
                    // ничего - 0, не знаю - 1, читал немного - 2, хорошо знаю - 3, постоянно пишу - 4
                    { name: 'Самооценка', userRating: 4 },
                    { name: 'Оценка ментора', mentorRating: 4 },
                ],
                source: {
                    nameFile: 'name_of_file',
                    type: 'png',
                    size: '45 MB',
                }
            }
        ],

        softSkill: [
            // ничего - 0, сильная сторона - 1, стоит поработать - 2, слабая сторона - 3
            { name: 'Критическое мышление', userRating: 2, mentorRating: 3 },
            { name: 'Коммуникабельность', userRating: 1, mentorRating: 2 },
            { name: 'Командная работа', userRating: 1, mentorRating: 1 },
            { name: 'Выносливость', userRating: 1, mentorRating: 0 },
        ]
    },
    {
        id: 6,
        info: {
            name: 'Anna Perederii',
            icon: 'https://i.imgur.com/I8zokZH.jpg',
            profile: 'QA Automation Engineer(Java)',
            lastStateId: 2,
            social_media: {
                mail: 'anna.peredery00@gmail.com',
                phone: '+380 63 536 08 19',
                telegram: {
                    username: '@Anna_p_00',
                    link: 'https://t.me/Anna_p_00'
                },
                linkedin: 'https://www.linkedin.com/in/anna-perederii/'
            },
        },

        activity: {
            totalDays: {
                average: 10,
                current: 10,
            },
            formDays: {
                average: 1,
                current: 1,
            },
            testDays: {
                average: 3,
                current: 3,
                mistakes: 2
            },
            practiceDays: {
                average: 3,
                current: 3,
                mistakes: 2,
            },
        },

        userStateId: null,
        canMakeDecision: null,

        genInfo: {
            studyingTime: {
                began: '16-03-2018',
                finished: '--',
            },
            education: {
                institution: 'КПАИТ ОНАПТ',
                faculty: 'Инженерия ПО 4 курс / закончила',
                // tslint:disable-next-line:max-line-length
                otherAchievements: 'попал на стажировку в одну из самых престижных IT компаний Одессы/Украины - Provectus. Принимаю участие в разработке и развитии перспективного edu-tech продукта - UPME',
            },
            // tslint:disable-next-line:max-line-length
            motivation: 'Хочу развиваться профессионально, но понимаю что колледжа мало, общаться с единомышленниками и расти вместе с ними, получать актуальные знания',
            tableHardSkill: [
                // ничего - 0, не знаю - 1, читал немного - 2, хорошо знаю - 3, постоянно пишу - 4
                { name: 'Java', userRating: 4 },
                { name: 'QA', userRating: 4 },
                { name: 'Back-end', userRating: 2 },
            ],
            tableSoftSkill: [
                // ничего - 0, сильная сторона - 1, слабая сторона - 2, стоит поработать - 3
                { name: 'Критическое мышление', userRating: 2 },
                { name: 'Усидчивость', userRating: 1 },
                { name: 'Коммуникабельность', userRating: 1 },
            ],
        },

        testTasks: [
            {
                name: 'QA Automation',
                status: 1,
                daysSpent: 7,
                result: {
                    points: 17,
                    maxPossiblePoints: 20,
                },
                mistakes: 1,
                source: {
                    nameFile: 'website-wireframe',
                    type: 'psd',
                    size: '45.9 MB',
                }
            },
        ],

        practiceTasks: [
            {
                name: 'Java',
                // status: 0 == IN PROGRESS, status: 1 == DONE
                status: 1,
                daysSpent: 7,
                rating: {
                    points: 85,
                    maxPossiblePoints: 100,
                },
                // tslint:disable-next-line:max-line-length
                feedback: 'Кандидат хорошо владеет базовыми знаниями (типы переменнных и операции над ними), небольшой опыт владения классами, льём водичку для красо...',
                tableRating: [
                    // ничего - 0, не знаю - 1, читал немного - 2, хорошо знаю - 3, постоянно пишу - 4
                    { name: 'Самооценка', userRating: 4 },
                    { name: 'Оценка ментора', mentorRating: 3 },
                ],
                source: {
                    nameFile: 'name_of_file',
                    type: 'png',
                    size: '45 MB',
                }
            }
        ],

        softSkill: [
            // ничего - 0, сильная сторона - 1, стоит поработать - 2, слабая сторона - 3
            { name: 'Критическое мышление', userRating: 3, mentorRating: 2 },
            { name: 'Коммуникабельность', userRating: 1, mentorRating: 1 },
            { name: 'Командная работа', userRating: 2, mentorRating: 0 },
            { name: 'Выносливость', userRating: 1, mentorRating: 1 },
        ]
    },
    {
        id: 7,
        info: {
            name: 'Kyrylo Meretskiy',
            icon: 'https://i.imgur.com/X9n83E4.png',
            profile: 'Middle Back-end Engineer(Symphony)',
            lastStateId: 2,
            social_media: {
                mail: 'kyrylomeretsky@gmail.com',
                phone: '+380 97 155 34 31',
                telegram: {
                    username: '@kizzill',
                    link: 'https://t.me/kizzill'
                },
                linkedin: 'https://www.linkedin.com/in/kirill-meretskyi-0894b1177/'
            },
        },

        activity: {
            totalDays: {
                average: 10,
                current: 15,
            },
            formDays: {
                average: 1,
                current: 3,
            },
            testDays: {
                average: 3,
                current: 2,
                mistakes: 0
            },
            practiceDays: {
                average: 3,
                current: 5,
                mistakes: 15,
            },
        },

        userStateId: null,
        canMakeDecision: null,

        genInfo: {
            studyingTime: {
                began: '16-03-2020',
                finished: '31-03-2020',
            },
            education: {
                institution: 'КЗИ ОНАС',
                faculty: 'Инженерия ПО 4 курс / закончила',
                // tslint:disable-next-line:max-line-length
                otherAchievements: 'попал на стажировку в одну из самых престижных IT компаний Одессы/Украины - Fishly. Принимаю участие в разработке и развитии классных продуктов',
            },
            // tslint:disable-next-line:max-line-length
            motivation: 'Короче говоря, друг уговорил его. Роман перешел на работу в это агентство в качестве заместителя директора. После чего его друг внезапно заболел и уехал во Францию лечиться на каком-то курорте, да там и остался, закрутив любовь с француженкой.',
            tableHardSkill: [
                // ничего - 0, не знаю - 1, читал немного - 2, хорошо знаю - 3, постоянно пишу - 4
                { name: 'PHP', userRating: 4 },
                { name: 'JS', userRating: 2 },
                { name: 'SQL', userRating: 4 },
            ],
            tableSoftSkill: [
                // ничего - 0, сильная сторона - 1, слабая сторона - 2, стоит поработать - 3
                { name: 'Критическое мышление', userRating: 1 },
                { name: 'Усидчивость', userRating: 1 },
                { name: 'Коммуникабельность', userRating: 1 },
            ],
        },

        testTasks: [
            {
                name: 'PHP',
                status: 1,
                daysSpent: 8,
                result: {
                    points: 20,
                    maxPossiblePoints: 20,
                },
                mistakes: 0,
                source: {
                    nameFile: 'test-task-1',
                    type: 'php',
                    size: '45.9 KB',
                }
            },
            {
                name: 'SQL',
                status: 1,
                daysSpent: 6,
                result: {
                    points: 20,
                    maxPossiblePoints: 20,
                },
                mistakes: 1,
                source: {
                    nameFile: 'test-task-2',
                    type: 'php',
                    size: '31.2 KB',
                }
            }
        ],

        practiceTasks: [
            {
                name: 'SQL',
                // status: 0 == IN PROGRESS, status: 1 == DONE
                status: 1,
                daysSpent: 9,
                rating: {
                    points: 92,
                    maxPossiblePoints: 100,
                },
                // tslint:disable-next-line:max-line-length
                feedback: 'Какой классный код! В жизни лучше не видел!',
                tableRating: [
                    // ничего - 0, не знаю - 1, читал немного - 2, хорошо знаю - 3, постоянно пишу - 4
                    { name: 'Самооценка', userRating: 4 },
                    { name: 'Оценка ментора', mentorRating: 4 },
                ],
                source: {
                    nameFile: 'practice_task_1',
                    type: 'php',
                    size: '21 KB',
                }
            }
        ],

        softSkill: [
            // ничего - 0, сильная сторона - 1, стоит поработать - 2, слабая сторона - 3
            { name: 'Критическое мышление', userRating: 4, mentorRating: 4 },
            { name: 'Коммуникабельность', userRating: 4, mentorRating: 4 },
            { name: 'Командная работа', userRating: 4, mentorRating: 4 },
            { name: 'Выносливость', userRating: 4, mentorRating: 4 },
        ]
    },
    {
        id: 8,
        info: {
            name: 'Serhii Tihovskii',
            icon: 'https://i.imgur.com/KmMA1K5.png',
            profile: 'Middle Frontend Engineer(Angular)',
            lastStateId: 2,
            social_media: {
                mail: 'artur.momo@gmail.com',
                phone: '+380 66 167 73 12',
                telegram: {
                    username: '@stih07',
                    link: 'https://t.me/stih07'
                },
                linkedin: 'https://www.linkedin.com/in/stih07/'
            },
        },

        activity: {
            totalDays: {
                average: 10,
                current: 7,
            },
            formDays: {
                average: 1,
                current: 1,
            },
            testDays: {
                average: 3,
                current: 3,
                mistakes: 2
            },
            practiceDays: {
                average: 3,
                current: 2,
                mistakes: 5,
            },
        },

        userStateId: null,
        canMakeDecision: null,

        genInfo: {
            studyingTime: {
                began: '04-08-2020',
                finished: '04-08-2020',
            },
            education: {
                institution: null,
                faculty: null,
                // tslint:disable-next-line:max-line-length
                otherAchievements: 'Был преподавателем в IT2School. Последний чемпион AtomSpace по настольному теннису',
            },
            // tslint:disable-next-line:max-line-length
            motivation: 'Раскаленный металл перелился через край вагончика, брызнул на пол, разбился на ослепительные осколки, часть которых полетела далеко за красную черту и впилась в симпатичные Эллочкины ножки. Эллочка взвизгнула, как ошпаренный поросеночек, и бросилась бежать сломя голову и не разбирая дороги.',
            tableHardSkill: [
                // ничего - 0, не знаю - 1, читал немного - 2, хорошо знаю - 3, постоянно пишу - 4
                { name: 'Angular', userRating: 4 },
                { name: 'JS', userRating: 4 },
                { name: 'React', userRating: 2 },
            ],
            tableSoftSkill: [
                // ничего - 0, сильная сторона - 1, слабая сторона - 2, стоит поработать - 3
                { name: 'Критическое мышление', userRating: 1 },
                { name: 'Усидчивость', userRating: 3 },
                { name: 'Коммуникабельность', userRating: 1 },
            ],
        },

        testTasks: [
            {
                name: 'Angular',
                status: 2,
                daysSpent: 4,
                result: null,
                mistakes: null,
                source: null
            }
        ],

        practiceTasks: [
            {
                name: 'Angular',
                // status: 0 == IN PROGRESS, status: 1 == DONE
                status: 0,
                daysSpent: 3,
                rating: null,
                // tslint:disable-next-line:max-line-length
                feedback: 'Какой классный код! В жизни лучше не видел!',
                tableRating: null,
                source: null
            }
        ],

        softSkill: [
            // ничего - 0, сильная сторона - 1, стоит поработать - 2, слабая сторона - 3
            { name: 'Критическое мышление', userRating: 4, mentorRating: 4 },
            { name: 'Коммуникабельность', userRating: 4, mentorRating: 4 },
            { name: 'Командная работа', userRating: 4, mentorRating: 4 },
            { name: 'Выносливость', userRating: 4, mentorRating: 4 },
        ]
    },
    {
        id: 9,
        info: {
            name: 'Евгений Солнышко',
            icon: null,
            profile: 'Frontend developer',
            lastStateId: 1,
            social_media: {
                mail: 'solncelikiy@gmail.com',
                phone: '+380 99 999 99 99',
                telegram: null,
                linkedin: null
            },
        },

        activity: {
            totalDays: {
                average: 10,
                current: 7,
            },
            formDays: {
                average: 1,
                current: 1,
            },
            testDays: {
                average: 3,
                current: null,
                mistakes: 2
            },
            practiceDays: {
                average: 3,
                current: null,
                mistakes: 1
            },
        },

        userStateId: null,
        canMakeDecision: null,

        genInfo: {
            studyingTime: {
                began: '04-08-2020',
                finished: '04-08-2020',
            },
            education: {
                institution: null,
                faculty: null,
                // tslint:disable-next-line:max-line-length
                otherAchievements: 'Хороший парень',
            },
            // tslint:disable-next-line:max-line-length
            motivation: 'Если бы мужчина видел, что его отец тепло и участливо относился к матери, когда та была расстроена, он тогда более четко представлял бы, в чем нуждается женщина. А поскольку необходимых знаний и опыта у него нет, то не знает, как поступить. Письма-ответы являются лучшим способом показать мужчине, что нужно женщине. Постепенно он научится адекватно реагировать на ее чувства. Иногда женщины спрашивают меня: «Если я скажу ему, что мне хотелось бы услышать, и он именно так ответит, как мне убедиться в искренности его слов?» Это важный вопрос. Если мужчина не любит женщину, он не будет даже стараться поддержать ее. Но если он пытается ответить в соответствии с ее желанием, наиболее вероятно, что поступает искренне. Когда его слова кажутся не вполне откровенными, это свидетельствует о том, что он начал овладевать этим умением. Непросто научиться реагировать по-новому; трудности могут оттолкнуть его. Возникает критический момент. Мужчине, как никогда, становятся необходимы одобрение и поддержка. Ему нужна обратная связь, чтобы почувствовать, что он на верном пути.',
            tableHardSkill: [
                // ничего - 0, не знаю - 1, читал немного - 2, хорошо знаю - 3, постоянно пишу - 4
                { name: 'Angular', userRating: 4 },
                { name: 'JS', userRating: 4 },
                { name: 'React', userRating: 2 },
            ],
            tableSoftSkill: [
                // ничего - 0, сильная сторона - 1, слабая сторона - 2, стоит поработать - 3
                { name: 'Критическое мышление', userRating: 1 },
                { name: 'Усидчивость', userRating: 3 },
                { name: 'Коммуникабельность', userRating: 1 },
            ],
        },

        testTasks: [
            {
                name: 'Angular',
                status: 0,
                daysSpent: 4,
                result: null,
                mistakes: null,
                source: null
            }
        ],

        practiceTasks: [],

        softSkill: null
    },

];
