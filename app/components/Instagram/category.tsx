import { FC, useState } from "react";

type CategoryButtonProps = {
    setContent: any;
};

type CategoryButtonType = {
    id: number;
    content: string;
    active: boolean;
};

const CategoryButton: FC<CategoryButtonProps> = ({ setContent }) => {
    const [categoryButtonTypes, setCategoryButtonTypes] = useState<CategoryButtonType[]>([
        { id: 0, content: "Profile Picture Viewer", active: true },
        { id: 1, content: "Download Video", active: false },
        { id: 2, content: "Download Stories", active: false },
        { id: 3, content: "Follower Counter", active: false },
    ]);

    const categoryButtonClick = (id: number) => {
        const updatedButtons = categoryButtonTypes.map((button) =>
            button.id === id
                ? { ...button, active: true }
                : { ...button, active: false }
        );
        setCategoryButtonTypes(updatedButtons);
        setContent(categoryButtonTypes[id].content);
    };

    return (
        <div className="flex w-full justify-center items-center mt-4 px-2">
            <div className="w-[40%] flex justify-between items-center gap-2">
                {categoryButtonTypes.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => categoryButtonClick(item.id)}
                        className={`w-[47%] hover:shadow-form rounded-md ${item.active ? "bg-[#581C87] text-white" : "bg-white border border-[#581C87] text-[#581C87]"
                            } text-center py-3 text-xs outline-none flex justify-center items-center`}
                    >
                        {item.content}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CategoryButton;