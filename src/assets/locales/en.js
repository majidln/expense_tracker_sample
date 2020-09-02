export default {
  greeting: 'Hi!',
  floatingMenu: {
    income: 'Income',
    outcome: 'Outcome'
  },
  navigation: {
    home: 'Home',
    setting: 'Setting',
    income: 'Income',
    outcome: 'Outcome',
  },
  income: {
    amount: 'Amount',
    amountPlaceholder: 'Please enter amount',
    description: 'Description',
    descriptionPlaceholder: 'Please enter description',
    category: 'Category',
    categoryPlaceholder: 'Please select category',
    type: 'Type',
    typePlaceholder: 'Please select type',
    submit: 'Subimt',
    empty: 'Your income is empty!',
    addNew: 'Add new icome',
    errors: {
      amount: 'Amount is required',
      amountFormat: 'Amount is not valid',
      category: 'Category is required',
      description: 'Description is required',
      type: 'Type is required',
    }
  },
  outcome: {
    amount: 'Amount',
    amountPlaceholder: 'Please enter amount',
    description: 'Description',
    descriptionPlaceholder: 'Please enter description',
    category: 'Category',
    categoryPlaceholder: 'Please select category',
    type: 'Type',
    typePlaceholder: 'Please select type',
    submit: 'Subimt',
    empty: 'Your Outcome is empty!',
    addNew: 'Add new outcome',
    errors: {
      amount: 'Amount is required',
      amountFormat: 'Amount is not valid',
      category: 'Category is required',
      description: 'Description is required',
      type: 'Type is required',
    }
  },
  components: {
    selectInput: {
      defaultValue: 'Choose an options'
    }
  },
  setting: {
    theme: {
      to: {
        light: 'Change to light theme',
        dark: 'Change to dark theme'
      }
    },
    language: {
      title: 'Change language',
      en: 'English',
      fa: 'فارسی (Farsi)'
    }
  },
  statistic: {
    today: 'Today',
    week: 'Week',
    month: 'Month',
    all: 'All'
  }
};
