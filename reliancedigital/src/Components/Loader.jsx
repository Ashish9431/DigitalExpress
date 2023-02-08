import { Image } from "@chakra-ui/react";
import { Load } from "./Style";


const Loader = () => {
    return (
        <div>
        <Load>
           <Image height = {"100px"} width = "300px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQNHgIFSc2mxeYRg93w-0MVwS11sNWovc1Vp-GnBrD&s" alt="logo"/>
        </Load>
        </div>
    );
};

export default Loader;