export default function (engine) {
    engine.closures.add("calculateStarshipComputer", (fact, context) => {
        const data = fact.data;
        const computers = fact.items.filter(x => x.type === "starshipComputer");
        
        data.attributes.computer = {
            value: 0,
            tooltip: []
        };

        if (computers && computers.length > 0) {
            data.attributes.computer.value = computers[0].data.modifier;
            data.attributes.computer.tooltip.push(
                game.i18n.format("SFRPG.StarshipSheet.Modifiers.ComputerBonus", {
                    mod: computers[0].data.modifier.signedString(),
                    source: computers[0].name
                })
            );
            
        }

        return fact;
    });
}