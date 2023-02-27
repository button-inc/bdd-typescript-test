Feature: Save timesheet hours

Register worked hours 

Scenario Outline: Validate required fields
  Given a new Allocation with "<required_field>" = "<value>"
  When I try to save the Allocation
  Then "<result>"
  
Examples:
   | required_field  | value        |    result                       | 
   |  User           | ""           | Fail: User is required          |
   |  User           | "Eduardo"    | Allocation saved with success   |
   |  Activity       | ""           | Fail: Activity is required      |
   |  Activity       | "CCBC"       | Allocation saved with success   |
   |  WorkDate       | ""           | Fail: WorkDate is required      |
   |  WorkDate       | "2023-01-04" | Allocation saved with success   |
   |  Hours          | ""           | Fail: Hours is required         |
   |  Hours          | "4"          | Allocation saved with success   |

Scenario Outline: Validate Oneness of the Allocation
  Given the existing Allocation 
   | User       | Activity  | WorkDate     | Hours   |
   | "Eduardo"  | "CCBC"    | "2023-01-04" | "8"     |
  And new Allocation with User = "<user>"
  When I try to save the Allocation
  Then "<result>"
  
Examples:
   | user      | activity      | workdate     | result                        |
   |-----------|---------------|--------------|-------------------------------|
   | "Eduardo" | "CCBC"        | "2023-01-04" | Fail: Information duplicated  |
   | "Gabriel" | "CCBC"        | "2023-01-04" | Allocation saved with success |
   | "Eduardo" | "ClimateTrax" | "2023-01-04" | Allocation saved with success |
   | "Eduardo" | "CCBC"        | "2023-01-05" | Allocation saved with success |


# 	
# Scenario Outline: Validate if "WorkedDate" is a valid date
#   Given a new Allocation with "WorkDate" = <value>
#   When I try to save the Allocation
#   Then <result>
#   
# Examples:
#    | value        |    result                               | 
#    | "2023-02-30" | Fail:  WorkDate must be a valid date    |
#    | "2023-02-28" | Allocation saved with success           |
#
# Scenario Outline: Validate if hours fits in a day "(0 >= h <= 24)"
#   Given a new Allocation with "Hours" = <value>
#   When I try to save the Allocation
#   Then <result>
#   
# Examples:
#    | value  |    result                                         | 
#    | "-1"   | Fail:  Hours must a number be between 0 and 24    |
#    | "0"    | Allocation saved with success                     |
#    | "24"   | Allocation saved with success                     |
#    | "25"   | Fail:  Hours must a number be between 0 and 24    |
#
# Scenario: (Action) Delete existent values
#   Given a valid new Allocation 
#   When I save the Allocation
#   Then the existent values store are deleted
#   
# Scenario: (Action) Save values 
#   Given a valid new Allocation 
#   When I save the Allocation
#   Then the information is stored 
#   And it shows the success message "Information saved"
#
