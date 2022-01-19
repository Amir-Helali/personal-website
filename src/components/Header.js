import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className='header-wraper'>
            <div className='main-info'>
                <Typed className="typed-text" 
                strings={['<em>"Don\'t worry if it doesn\'t work right. If everything did, you\'d be out of a job."</em> <br>- Mosher\'s Law of Software Engineering',
                '<em>"Testing leads to failure, and failure leads to understanding."</em> <br>- Burt Rutan', 
                '<em>"A good programmer is someone who always looks both ways before crossing a one-way street."</em> <br>- Doug Linder',
                '<em>"First, solve the problem. Then, write the code."</em> <br>- John Johnson',
                '<em>"Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program"</em> <br>- Linus Torvalds']}
                typeSpeed={25}
                backSpeed={20}
                loop></Typed>
            </div>
        </div>
    )
}

export default Header
