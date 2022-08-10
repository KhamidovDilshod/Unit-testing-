import {CalculatorService} from "./calculator.service";
import {LoggerService} from "./Logger/logger.service";

describe('Calculator Service', function () {
  const loggerService = new LoggerService();
  let mockLoggerService: any;
  let calculatorService: any;
  beforeEach(() => {
    mockLoggerService = jasmine.createSpyObj('LoggerService', ['log'])
    calculatorService = new CalculatorService(loggerService)
  })

  it('should add two numbers', () => {
    spyOn(loggerService, 'log').and.callThrough();
    expect(calculatorService.add(10, 10)).toEqual(20)
    expect(loggerService.log).toHaveBeenCalledTimes(1);
  })
  it('should subtract two numbers', () => {
    spyOn(loggerService, 'log').and.callThrough();
    expect(loggerService.log).toHaveBeenCalledTimes(1);
    expect(calculatorService.subtract(20, 10)).toEqual(10)
  })
})
