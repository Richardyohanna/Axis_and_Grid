
const FloatingInfoCard = () => {
    return (
        <div
            className="
                absolute
                bottom-8
                right-8

                bg-black/80

                backdrop-blur

                border

                border-yellow/30

                rounded-xl

                p-6

                w-72
            "
        >

            <p
                className="
                    uppercase
                    tracking-[0.3em]
                    text-yellow
                    text-xs
                "
                >

                Engineering Excellence

            </p>

            <h3 className="
                    mt-3
                    text-2xl
                    font-bold
                "
                >

                Precision.
                Innovation.
                Integrity.

            </h3>

        </div>
    );
}

export default FloatingInfoCard;