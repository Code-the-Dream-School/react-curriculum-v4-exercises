//this file will be the exercise section that will render title and student work 
export default function ExerciseSection ({title, StudentWork }) {
    return (
        <div>
            <h2>
                {title}
            </h2>
            <StudentWork />
        </div>
    );

}
