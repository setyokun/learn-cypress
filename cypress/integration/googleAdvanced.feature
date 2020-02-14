Feature: Google Advanced Search   
  @elon
  Scenario: Search Elon Musk in Google Advanced Search
    Given I open Google Advanced Page
    When I search "Elon Musk"
    Then I can see result about Elon Musk