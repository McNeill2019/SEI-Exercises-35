class Account
  attr_reader :name, :balance
def initialise( name, balance=100)
  @name = name
  @balance = balance
end

public

  def display_balance(pin_number)
    if pin_number == pin
      puts "Balance: $#{@balance}."
    else
      puts pin_error
    end
  end

  def withdraw(pin_number, amount)
    if pin_number == pin
      if @balance >= amount
      @balance -= amount
      puts "Withdrew #{amount}. New balance: $#{@balance}."
      else
        puts "You don't have sufficient funds"
      end
    else
      puts pin_error
    end
  end

  def deposit(pin_number, amount)
    if pin_number == pin
      @balance += amount
      puts "Deposited #{amount}. New balance: $#{@balance}."
    else
      puts pin_error
    end
  end

private

  def pin
    @pin = 1234
  end

  def pin_error
    "Access denied: incorrect PIN."
  end

end

checking_account = Account.new("Jamie", 2_000_000)

checking_account.display_balance(1234)

checking_account.withdraw(1234, 1_440_000)

class SavingsAccount < Account
end

savings_account = SavingsAccount.new("Jamie", 3_000_000)

savings_account.withdraw(1234, 1_440_000)
