class Accountant extends Employee {
   

    payPaycheck(receiver: IEmployee) {

        //Let's pretend this is a perfect world without taxes.
        let paycheck = Number(receiver.getSalary()) / 12; 

        if (receiver.getIsFormallyHired()) {
            receiver.setCurrentMoney(Number(receiver.getCurrentMoney()) + paycheck);
        } 
    }
    payManagerPaycheck(receiver: Manager) {

        let paycheck = Number(receiver.getSalary()) / 12; 
        receiver.setCurrentMoney(Number(receiver.getCurrentMoney()) + paycheck);
    }

}