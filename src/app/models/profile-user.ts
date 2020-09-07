export interface ProfileUser {
    id: number;
    info: Info;
    activity: Activity;
    userStateId: null;
    canMakeDecision: null;
    genInfo: GenInfo;
    testTasks: TestTask[];
    practiceTasks: PracticeTask[];
    softSkill: SoftSkillBlock[];
}

export interface Activity {
    totalDays: FormDaysClass;
    formDays: FormDaysClass;
    testDays: PracticeDaysClass;
    practiceDays: PracticeDaysClass;
}

export interface FormDaysClass {
    average: number;
    current: number;
}

export interface PracticeDaysClass {
    average: number;
    current: number;
    mistakes: number;
}

export interface GenInfo {
    studyingTime: StudyingTime;
    education: Education;
    motivation: string;
    tableHardSkill: TableSkill[];
    tableSoftSkill: TableSkill[];
}

export interface Education {
    institution: string;
    faculty: null | string;
    otherAchievements: string;
}

export interface StudyingTime {
    began: string;
    finished: string;
}

export interface TableSkill {
    name: string;
    userRating: number;
}

export interface Info {
    name: string;
    icon: string;
    profile: string;
    lastStateId: number;
    social_media: SocialMedia;
}

export interface SocialMedia {
    mail: string;
    phone: string;
    telegram: Telegram;
    linkedin: null | string;
}

export interface Telegram {
    username: string;
    link: string;
}

export interface PracticeTask {
    name: string;
    status: number;
    daysSpent: number;
    rating: Rating;
    feedback: string;
    tableRating: SoftSkillBlock[];
    source: Source;
}

export interface Rating {
    points: number;
    maxPossiblePoints: number;
}

export interface Source {
    nameFile: string;
    type: string;
    size: string;
}

export interface SoftSkillBlock {
    name: string;
    userRating?: number;
    mentorRating?: number;
}

export interface TestTask {
    name: string;
    status: number;
    daysSpent: number;
    result: Rating;
    mistakes: number;
    source?: Source;
}