import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PdfFilesService {

  scratchCard: Object = {
    content: [
      {
        columns: [
          {
            image: 'data:image/png;base64,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',
            width: 200,
          },
          {
            text: ''
          },
          {
            text: [
              {
                text: 'Food and Agriculture Organization of the United Nations\n\n Headquarters \n',
                style: 'subtitle'
              },
              {
                text: 'Viale delle Terme di Caracalla\n 00153 Rome, Italy \n ',
                style: 'text'
              },
              'Tel: ',
              {
                text: '(+39) 06 57051 \n ',
                style: 'email'
              },
              'e-mail: ',
              {
                text: ' FAO-HQ@fao.org \n',
                link: 'FAO-HQ@fao.org',
                style: 'email'
              },
              'web: ',
              {
                text: 'https://www.fao.org/\n\n\n',
                link: 'https://www.fao.org/',
                style: 'email'
              },
            ],
            width: '40%',
          }
        ],
      },
      {
        columns: [
          {
            text: ''
          },
          {
            text: [
              {
                text: `Date: ${' <Date of tansaction> '} \n`,
                style: 'small'
              },
            ],
            width: '40%',
          }
        ]
      },
      {
        text: `\n\nScratch Card № ${' <Scratch Card number> '}\n\n`,
        style: 'title',
      },
      {
        text: [
          {
            text: `${' <Vendor`s name> '} \n`,
            style: 'subtitle'
          },
          {
            text: `${' <Vendor`s business address> '}\n`,
            style: 'subtitle'
          },
          {
            text: `${' <Vendor`s business address continuous> '} \n`,
            style: 'subtitle'
          },
          {
            text: `Lisense № ${' <Vendor`s license number> '}\n`,
            style: 'subtitle'
          },
        ]
      },
      {
        text: [
          '\n\n\n\n',
          'This vendor is a participant of Health Street Food Incentives Program\n\n',
          {
            text: 'To leave your feedback on Vendor, please, call  ',
            style: 'subtitle'
          },
          {
            text: '+342 555 555 555',
            style: 'title'
          }
        ],
      },
    ],
    styles: {
      title: {
        fontSize: 18,
        bold: true,
      },
      subtitle: {
        fontSize: 13,
        bold: true,
      },
      text: {
        fontSize: 12,
        bold: false,
      },
      email: {
        fontSize: 12,
        bold: false,
        color: 'blue',
      },
      smallText: {
        fontSize: 10,
        bold: false,
      }
    }
  };

  invoice: Object = {
    content: [
      {
        columns: [
          {
            image: 'data:image/png;base64,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',
            width: 200,
          },
          {
            text: ''
          },
          {
            text: [
              {
                text: 'Food and Agriculture Organization of the United Nations\n\n Headquarters \n',
                style: 'subtitle'
              },
              {
                text: 'Viale delle Terme di Caracalla\n 00153 Rome, Italy \n ',
                style: 'text'
              },
              'Tel: ',
              {
                text: '(+39) 06 57051 \n ',
                style: 'email'
              },
              'e-mail: ',
              {
                text: ' FAO-HQ@fao.org \n',
                link: 'FAO-HQ@fao.org',
                style: 'email'
              },
              'web: ',
              {
                text: 'https://www.fao.org/\n\n\n',
                link: 'https://www.fao.org/',
                style: 'email'
              },
            ],
            width: '40%',
          }
        ],
      },
      {
        columns: [
          {
            text: [
              {
                text: `${' <Vendor`s name> '} \n`,
                style: 'subtitle'
              },
              {
                text: `${' <Vendor`s business address> '}\n`,
                style: 'text'
              },
              {
                text: `${' <Vendor`s business address continuous> '} \n`,
                style: 'text'
              },
              {
                text: `Lisense № ${' <Vendor`s license number> '}\n`,
                style: 'text'
              },
            ]
          },
          {
            text: [
              {
                text: `Date: ${' <Date of tansaction> '} \n`,
                style: 'small'
              },
              {
                text: `Invoice #${' <No of invoice> '}\n`,
                style: 'small'
              },
            ],
            width: '40%',
          }
        ]
      },
      {
        text: '\n\nInformation Invoice\n\n',
        style: 'title',
      },
      {
        columns: [
          {
            text: [
              {
                text: 'DESCRIPTION \n\n',
                style: 'subtitle'
              },
              {
                text: 'Scratch cards No: \n',
                style: 'text'
              },
              {
                text: `${' <No Scratch card 1> '} \n`,
                style: 'text'
              },
              {
                text: `${' <No Scratch card 2> '} \n`,
                style: 'text'
              }
            ]
          },
          {
            text: [
              {
                text: 'QUANTITY \n\n',
                style: 'subtitle'
              },
              {
                text: `${' <Quantity of cards> '} \n`,
                style: 'text'
              }
            ]
          },
          {
            text: [
              {
                text: 'UNIT PRICE \n\n',
                style: 'subtitle'
              },
              {
                text: `${' <Cost per card> '} \n`,
                style: 'text'
              }
            ]
          },
          {
            text: [
              {
                text: 'CURRENCY \n\n',
                style: 'subtitle'
              },
              {
                text: `${' <Currency> '} \n`,
                style: 'text'
              }
            ]
          },
        ]
      },
      {
        text: [
          '\n\n\n\n',
          'Total payment due in 30 days. Please, include the invoice',
          'number on your check. If you have questions about this onvoice, please, contact ',
          { text: 'FAO-HQ@fao.org.', link: 'FAO-HQ@fao.org', style: 'email'},
          'Thank you for your business.'
        ],
      },
      {
        columns: [
          {
            text: ''
          },
          {
            text: [
              '\n\n\n\n\n',
              'Royal Bank of Ghana \n',
              'IBAN: 12345678912345678912345678 \n ',
              'SWIFT BIC 1111111111 \n'
            ],
          },
        ]

      },
    ],
    styles: {
      title: {
        fontSize: 18,
        bold: true,
      },
      subtitle: {
        fontSize: 13,
        bold: true,
      },
      text: {
        fontSize: 12,
        bold: false,
      },
      email: {
        fontSize: 12,
        bold: false,
        color: 'blue',
      },
      smallText: {
        fontSize: 10,
        bold: false,
      }
    }
  };
}
