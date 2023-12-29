Feature: calculator app
  Scenario: Right result check and color result
    When I visit main
    Then I should see a input
    Then I input value and click on button
    Then I see result and right color result text
  
  Scenario: Check input 0 when operator div
    When I visit main
    Then I select operator div and input 0

  Scenario: Check input G in Hex radix
    When I visit main
    Then I select radix 16 and input G
  
  Scenario: Check input 9 in Octal radix
    When I visit main
    Then I select radix 8 and input 9

  Scenario: Check input only number in 10 radix
    When I visit main
    Then I input G in 10 radix