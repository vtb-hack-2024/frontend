export function GetAchivements({size}) {
    let achives = []
    return (
        <>
            {achives.map(elem => <li key={elem.id} className="shadow-drop"></li>)}
        </>
    )
}