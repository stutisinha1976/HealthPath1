import React, { useState } from 'react';
import AnimatedInputBox from './input';
import DisplayBox from './displaybox';
import axios from 'axios';
import Navbar from '../landing/Navbar'; // Import the Navbar component

const Chat = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [queries, setQueries] = useState([]);
    const [displayedQueries, setDisplayedQueries] = useState([]);
    const [currentQuery, setCurrentQuery] = useState('');
    const [isQuerySubmitted, setIsQuerySubmitted] = useState(false);
    const [isInputMoved, setIsInputMoved] = useState(false);
    const [que, setque] = useState('');
    const [ans, setans] = useState([]);
    const [Loading, setLoading] = useState(false);
    const [show, setshow] = useState(false);
    const [displaybutton, setdisplaybutton] = useState(false);
    const medicalKeywords = [
        'Diabetes', 'Hypertension', 'COVID-19', 'Vaccination', 'Cancer', 
        'Heart Disease', 'Asthma', 'Mental Health', 'Pregnancy', 'Allergies', 
        'Arthritis', 'Cholesterol', 'Stroke', 'Obesity', 'Depression', 
        'Anxiety', 'Vaccines', 'Antibiotics', 'Pain Management', 'Nutrition', 
        'Exercise', 'Sleep Disorders', 'Dementia', 'Alzheimer’s', 'HIV/AIDS', 
        'Thyroid', 'Kidney Disease', 'Liver Disease', 'Pneumonia', 'Tuberculosis', 
        'Malaria', 'Dengue', 'Flu', 'Migraine', 'Epilepsy', 'Autism', 
        'ADHD', 'Osteoporosis', 'Psoriasis', 'Eczema', 'Infections', 
        'Blood Pressure', 'Cholesterol Levels', 'Insulin', 'Chemotherapy', 
        'Radiation Therapy', 'Physical Therapy', 'Surgery', 'Medication', 
        'Side Effects', 'Symptoms', 'Diagnosis', 'Treatment', 'Prevention', 
        'Recovery', 'Rehabilitation', 'Palliative Care', 'Hospice Care', 
        'First Aid', 'Emergency Care', 'Pediatrics', 'Geriatrics', 
        'Women’s Health', 'Men’s Health', 'Sexual Health', 'Public Health'
    ];

    // Toggle sidebar visibility
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Add a new query
    const addQuery = (query) => {
        setQueries((prevQueries) => [...prevQueries, query]);
        setDisplayedQueries((prevDisplayed) => [...prevDisplayed, query]);
        setCurrentQuery(query);
        setIsQuerySubmitted(true);
        setIsInputMoved(true);
    };

    // Handle "Add New Query" button click
    const handleAddNewQueryClick = () => {
        setDisplayedQueries([]);
        setCurrentQuery('');
        setIsQuerySubmitted(false);
        setIsInputMoved(false);
    };

    // Fetch answer from the API
    async function getans() {
        setLoading(true);
        const response = await axios({
            url: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyB2PIbL4OzhuqOoS-Agc-OL_JlUnxrw9Kg',
            method: 'post',
            data: {
                "contents": [{
                    "parts": [{
                        "text": `${que}- here is the instruction for the message- Provide a clear, concise, and medically accurate answer. Use point-wise formatting with filled circle bullets (•) for clarity. Ensure each point starts on a new line and uses full sentences. If the query is unrelated to medical topics, reply with: "Please provide only medical-related questions."`
                    }]
                }]
            }
        });
        setans([
            ...ans,
            { user: que, bot: response['data']['candidates'][0]['content']['parts'][0]['text'] }
        ]);
        setLoading(false);
        setque('');
        setshow(true);
        const headword = medicalKeywords.filter(n => que.includes(n));
        setCurrentQuery(headword);
        forbutton();
    }

    // Check if the query contains specific keywords to show the "Read More" button
    function forbutton() {
        const check = medicalKeywords.some(word => que.includes(word));
        if (check) {
            setdisplaybutton(true);
        } else {
            setdisplaybutton(false);
        }
    }

    return (
        <div className="relative h-screen bg-[#7886C7] flex flex-col items-center">
            {/* Navbar */}
            <Navbar />

            {/* Main Chat Container */}
            <div className="bg-[#2D336B] w-[95%] h-[85%] rounded-xl relative overflow-hidden mt-4">
                {/* Top Section - Main Heading */}
                <div className="flex justify-between items-center p-4 border-b border-[#2D336B]">
                    <div className="flex flex-col">
                        <h1 className="text-4xl font-mono font-semibold text-[#A9B5DF]">
                            {currentQuery
                                ? `Your query about ${currentQuery}`
                                : 'Ask your medical query'}
                        </h1>
                        <h2 className="text-xl font-mono text-[#7886C7]">
                            Submit your query on medical conditions, treatments, or health advice
                        </h2>
                    </div>
                    
                </div>

                {/* Sidebar Section */}
                <div
                    className={`fixed right-0 top-0 h-full w-[20%] bg-[#2D336B] rounded-l-xl shadow-lg transform transition-transform duration-300 z-20 ${
                        isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                >
                    <h2 className="text-xl text-[#A9B5DF] font-mono font-semibold p-4">Previous Queries</h2>
                    <ul className="p-4 space-y-2 overflow-y-auto h-[80%]">
                        {queries.map((query, index) => (
                            <li
                                key={index}
                                className="p-2 rounded-md font-mono cursor-pointer transition-all duration-300 text-[#A9B5DF] hover:bg-[#7886C7]"
                            >
                                {query}
                            </li>
                        ))}
                    </ul>
                    <div className="absolute bottom-4 left-0 w-full px-4 flex justify-center">
                        <button
                            className="text-xl font-mono flex items-center justify-center gap-4 w-[80%] border-2 border-[#A9B5DF] text-[#A9B5DF] py-2 rounded-md shadow-md font-semibold"
                            onClick={handleAddNewQueryClick}
                        >
                            <img className="w-4" src="plus.svg" alt="" />
                            Add New Query
                        </button>
                    </div>
                </div>

                {/* Main Section */}
                <div className="h-[calc(100%-120px)] p-4 overflow-y-auto">
                    {!isQuerySubmitted && (
                        <h1 className="text-5xl font-mono font-medium text-[#A9B5DF] text-center mt-20">
                            Enter your medical query here.
                        </h1>
                    )}
                    <div
                        className={`flex flex-col justify-center items-center gap-5 transition-all duration-700 ${
                            isInputMoved ? 'mt-10' : 'mt-40'
                        }`}
                    >
                        <AnimatedInputBox
                            addQuery={addQuery}
                            getans={getans}
                            setque={setque}
                            que={que}
                            setIsQuerySubmitted={setIsQuerySubmitted}
                            setIsInputMoved={setIsInputMoved}
                        />
                    </div>

                    {/* Display Box Section */}
                    <div className="mt-6">
                        <DisplayBox queries={displayedQueries} ans={ans} Loading={Loading} show={show} displaybutton={displaybutton} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;