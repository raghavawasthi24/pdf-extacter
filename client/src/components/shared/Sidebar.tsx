import { ChevronsRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();
    const onClick = (path: string) => {
        navigate(`/${path}`);
    };

    const menuList = [
        {
            name: "Extract PDF",
            code: "",
        }
    ];
    return (
        <section className="w-72 bg-[#090040] h-full text-white p-4 flex flex-col gap-4">
            <p className="font-bold text-2xl">PDF Extractor</p>
            <div className="flex flex-col gap-2">
                {menuList.map((menu, key) => (
                    <div
                        className="flex items-center gap-1 cursor-pointer hover:bg-[#687FE5] p-1"
                        key={key}
                        onClick={() => onClick(menu.code)}
                    >
                        <ChevronsRight />
                        {menu.name}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Sidebar;
