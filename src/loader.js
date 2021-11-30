import { motion } from "framer-motion"

const redVar={
    hidden:{
        x:0
    },
    visible:{
        x:[20,-20],
        transition:{
            yoyo:'Infinity',
            type:'spring'
        }
    }
}
const greenVar={
    hidden:{
        x:0
    },
    visible:{
        x:[20,-20],
        transition:{
            delay:0.5,
            yoyo:'Infinity'
            ,type:'spring'
        }
    }
}
const blueVar={
    hidden:{
        x:0
    },
    visible:{
        x:[20,-20],
        transition:{
            delay:1,
            yoyo:'Infinity'
            ,type:'spring'
        }
    }
}

const loader = () => {
    return (
        <motion.div className="relative z-10 left-64">
            <motion.h1 className="text-red-600 text-9xl absolute" variants={redVar} initial="hidden" animate="visible" >.</motion.h1>
            <motion.h1 className="text-green-600 text-9xl absolute top-10"  variants={greenVar} initial="hidden" animate="visible" >.</motion.h1>
            <motion.h1 className="text-blue-600 text-9xl absolute top-20"  variants={blueVar} initial="hidden" animate="visible" >.</motion.h1>
            
        </motion.div>
    )
}

export default loader
