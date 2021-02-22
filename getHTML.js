module.exports = {
    getHTML: function getEmailContentForUser(user){
        let html = '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">\n' +
            '<html>\n' +
            '<head>\n' +
            '    <meta content="exported via StampReady" name="sr_export">\n' +
            '    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\n' +
            '    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
            '    <title>Newsletter</title>\n' +
            '\n' +
            '</head>\n' +
            '<body>\n' +
            '\n' +
            '    <table class="container padding-for-mobile-version"\n' +
            '           width="100%"\n' +
            '           cellspacing="0"\n' +
            '           cellpadding="0"\n' +
            '           border="0">\n' +
            '        <tr>\n' +
            '            <td align="center">\n' +
            '                <table class="table-inner" width="540" cellspacing="0" cellpadding="0" border="0">\n' +
            '                    <tr>\n' +
            '                        <td style="padding: 4px 0; background-color: #ffffff; text-align: left;">\n' +
            '                            <img src="./assets/headerAudebeneReddit.png" alt=""\n' +
            '                                 style="width: 540px; height: auto; padding: 12px 0;">\n' +
            '                        </td>\n' +
            '                    </tr>\n' +
            '                </table>\n' +
            '            </td>\n' +
            '        </tr>\n' +
            '    </table>\n' +
            '    <table class="container padding-for-mobile-version"\n' +
            '           style="padding: 4px 0;"\n' +
            '           width="100%"\n' +
            '           cellspacing="0"\n' +
            '           cellpadding="0"\n' +
            '           border="0">\n' +
            '        <tr>\n' +
            '            <td style="padding: 8px 0; background-color: transparent;">\n' +
            '                <table width="100%" cellspacing="0" cellpadding="0" border="0">\n' +
            '                    <tr>\n' +
            '                        <td style="background-color: transparent; border-bottom: 1px solid transparent;"\n' +
            '                        ></td>\n' +
            '                    </tr>\n' +
            '                </table>\n' +
            '            </td>\n' +
            '        </tr>\n' +
            '    </table>';

        html = html + '<table class="container padding-for-mobile-version"\n' +
            '           style="padding: 4px 0;"\n' +
            '           width="100%"\n' +
            '           cellspacing="0"\n' +
            '           cellpadding="0"\n' +
            '           border="0">\n' +
            '        <tr>\n' +
            '            <td style="padding: 8px 0; background-color: transparent;">\n' +
            '                <table width="100%" cellspacing="0" cellpadding="0" border="0">\n' +
            '                    <tr>\n' +
            '                        <td style="background-color: transparent; border-bottom: 1px solid transparent;"\n' + 'Hello '
            + user.userName + '\n' + 'Here are the top stories from your Reddit Feed from yesterday' +

            '                        ></td>\n' +
            '                    </tr>\n' +
            '                </table>\n' +
            '            </td>\n' +
            '        </tr>\n' +
            '    </table>';

        //TODO: Need to access the Reddit Subreddit Feeds for the specific user,
        // and add the image url for the top posts from there one by one, concatinating to the html variable above, and finally returning.


        return html;

    }

};


