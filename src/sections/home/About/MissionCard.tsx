interface Props{

title:string;

description:string;

}

const MissionCard=({title,description}:Props)=>{

return(

    <div
        className="
            border
            border-white/10
            bg-white/5
            backdrop-blur
            p-5
            rounded-xl
            transition-all
            duration-500

            hover:border-yellow
            hover:-translate-y-2
        ">

        <h4
        className="
            font-bold
            text-yellow
            uppercase
            tracking-widest
        "
        >
        {title}
        </h4>

        <p
            className="
                mt-3
                text-white/70
                leading-7
        "
        >
            {description}
        </p>

    </div>

    );

};

export default MissionCard;