interface Education {
    title: string;
    startDate: string;
    endDate?: string;
    school: string;
    location: string;
    description: string;
    currentUni: boolean;
}

const education: Education[] = [
    {
        title: "Bachelor's Degree in Software Engineering",
        startDate: "2020-06-01",
        endDate: "",
        school: "Universidad Abierta para Adultos (UAPA)",
        location: "Dominican Republic",
        description: "Pursuing a professional degree focused on developing technological solutions, gaining skills in programming, databases, and software project management.",
        currentUni: true,
    },
    {
        title: "Technical Degree in IT",
        startDate: "2015-08-17",
        endDate: "2019-06-20",
        school: "Politécnico Felipe Soriano Bello",
        location: "Constanza, Dominican Republic",
        description: "Technical training in IT with a focus on programming, technical support, and system maintenance.",
        currentUni: false,
    }
];



export default education;