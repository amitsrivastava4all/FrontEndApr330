export const SalaryOperations={
    salary : 0,
    takeSalary(salary){
        this.salary = salary; 
    },
    hra(){
        return this.salary * 0.30;
    }
    ,
    da(){
        return this.salary * 0.20;
    }
    ,
    ta(){
        return this.salary * 0.10;
    }
    ,
    pf(){
        return this.salary * 0.05;
    }
    ,
    gs(){
        return this.salary + this.hra() + this.da() + this.ta() ;
    },
    ns(){
        return this.gs() - this.pf();
    }
}