interface IGuineaPigGroup {

    guineaPigs: IGuineaPig[];
    
    removeGP(gp: GuineaPig);
    addGP(gp: GuineaPig);
    addMultipleGP(first: GuineaPig, ...last: GuineaPig[]);
    getNumGuineaPigs();
    moveGPToDifferentGroup(source: GuineaPig, target: GuineaPigGroup);
}