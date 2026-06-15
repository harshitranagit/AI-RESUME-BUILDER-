import { Sparkles } from "lucide-react";
import React from "react";

const ProfessionalSummaryForm = ({data, onChange, setResumeData}) => {
    return (
        <div className='space-y-4'>
            
            
            <div className="mt-6">
                <textarea value = {data || ""} onChange={(e)=> onChange(e.target.value)} rows={7} className='w-full p-3 px-4 mt-2 border text-sm border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500
                outline-none transition-colors resize-none' aria-placeholder='Write a compelling professional summary that highlights your key strengths and career objectives...' />
                <p className='text-xs text-gray-500 max-w-4/5 mx-auto text-center'>Tip:keep it concise (3-4 sentences) and focus on your most relevant achievements and skills.</p>

            </div>
        </div>
    )
}

export default ProfessionalSummaryForm