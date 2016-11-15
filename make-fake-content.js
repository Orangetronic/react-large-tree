

const randomWords = ["sausage","blubber","pencil","cloud","moon","water","computer","school","network","hammer","walking","violently","mediocre","literature","chair","two","window","cords","musical","zebra", "xylophone","penguin","home","dog","final","ink","teacher","fun","website","banana","uncle","softly","mega","ten","awesome","attatch","blue","internet","bottle","tight","zone","tomato","prison","hydro","cleaning","telivision","send","frog","cup","book","zooming","falling","evily","gamer","lid","juice","moniter","captain","bonding","loudly","thudding","guitar","shaving","hair","soccer","water","racket","table","late","media","desktop","flipper","club","flying","smooth","monster","purple","guardian","bold","hyperlink","presentation","world","national",  "comment","element","magic","lion","sand","crust","toast","jam","hunter","forest","foraging","silently","tawesomated","joshing","pong","bleep", "bunkum"]

function uuid(){
    var d = new Date().getTime();
    if(window.performance && typeof window.performance.now === "function"){
        d += performance.now(); //use high-precision timer if available
    }
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
}

function makePhrase () {
    let phrase = ""
    let count  = 0
    while (count < 4) {
        phrase += randomWords[Math.ceil(Math.random() * 100)]
        phrase += " "
        count++
    }
    return phrase
}

function generateBigTree (maxLevels = 6, targetCount = 17500) {

    let childCount  = 0

    // –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

    const createChild = function (level = 1, hasChildrenProbability = 0.5) {
        let newChild = {
            label: makePhrase(),
            _id  : uuid()
        }

        if (Math.random() > 0.6) {
            newChild.href = `#${newChild.label}`
        }

        // maybeAddChildren…
        const childIndex = Math.random()

        if (childIndex < hasChildrenProbability) {

            newChild.children = []
            const count = Math.ceil(childIndex * Math.random() * 100)

            for (let i = 0; i <= count; i++) {

                // reduce the probability of having children the deeper we go into the tree
                newProb = hasChildrenProbability / 2

                // if we fall off the max levels, or have surpassed our target childCount, don't have children
                if (level >= maxLevels || childCount > targetCount) newProb = 0

                // put the child over there with the rest of the children
                newChild.children.push(createChild(level + 1, newProb))
                
                // count them! pls don't lose count!
                childCount++
            }
        }

        return newChild
    }

    let tree = {
        children: [],
        label: "Home",
        _id: "home" 
    }

    while (childCount < targetCount) {
        const newChild = createChild()
        tree.children.push(newChild)
        childCount++;
    }

    console.log(`made a ${childCount} node tree`)

    document.title = `${childCount} node tree`

    return tree

}
