import React, { useState, useRef } from "react";
import { useEffect } from "react";

const AnimatedInputBox = ({
    addQuery,
    getans,
    setque,
    que,
    setIsQuerySubmitted,
    setIsInputMoved
}) => {
    const [image, setImage] = useState(null);
    const [suggestions, setSuggestions] = useState([]);
    const [showAbove, setShowAbove] = useState(false);
    const inputRef = useRef(null);

    const articlewords = [
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

    const generateNGramSuggestions = (input, words) => {
        if (!input) return [];
        const inputLower = input.toLowerCase();
        return words.filter(word => word.toLowerCase().includes(inputLower)).slice(0, 5);
    };

    const handleInputChange = e => {
        const value = e.target.value;
        setque(value);
        const newSuggestions = generateNGramSuggestions(value, articlewords);
        setSuggestions(newSuggestions);

        // Check input position
        adjustDropdownPosition();
    };

    const handleSuggestionClick = suggestion => {
        setque(suggestion);
        setSuggestions([]);
    };

    const handleImageUpload = e => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

    const handleKeyDown = e => {
        if (e.key === "Enter") {
            getans();
            setIsQuerySubmitted(true);
            setIsInputMoved(true);
        }
    };

    const adjustDropdownPosition = () => {
        if (inputRef.current) {
            const rect = inputRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            setShowAbove(rect.bottom > viewportHeight * 0.75);
        }
    };

    useEffect(() => {
        window.addEventListener("resize", adjustDropdownPosition);
        return () => window.removeEventListener("resize", adjustDropdownPosition);
    }, []);

    return (
        <div className="relative w-full flex items-center justify-center">
            <div className="relative w-[96%]">
                <input
                    ref={inputRef}
                    type="text"
                    value={que}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Enter Your Query here"
                    className="px-4 py-2 border-2 font-libra bg-[#FFF2F2] outline-0 border-[#2D336B] rounded-md w-full pr-20"
                />

                {/* Buttons for upload and send */}
                <div className="absolute inset-y-0 right-0 flex items-center gap-2 pr-2">
                    <input type="file" onChange={handleImageUpload} className="hidden" id="image-upload" />
                    <label htmlFor="image-upload" className="p-1 rounded-md cursor-pointer">
                        <img className="w-6" src="upload.svg" alt="Upload" />
                    </label>
                    <button
                        onClick={() => {
                            getans();
                            setIsQuerySubmitted(true);
                            setIsInputMoved(true);
                        }}
                        className="p-1 bg-[#7886C7] rounded-md hover:bg-[#2D336B] transition-all"
                    >
                        <img className="w-6 rounded-b-xl" src="send.svg" alt="Send"  />
                    </button>
                </div>
            </div>

            {/* Suggestions dropdown */}
            {suggestions.length > 0 && (
                <div
                    className={`absolute left-0 w-full bg-[#FFF2F2] border border-[#2D336B] rounded-md shadow-lg z-10 mb-1 ${showAbove ? "bottom-full mb-2" : "top-full mt-1"}`}
                >
                    {suggestions.map((suggestion, index) => (
                        <div
                            key={index}
                            className="p-2 hover:bg-[#A9B5DF] cursor-pointer text-[#2D336B]"
                            onClick={() => handleSuggestionClick(suggestion)}
                        >
                            {suggestion}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AnimatedInputBox;