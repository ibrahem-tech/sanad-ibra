import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Color, Padding, FontSize, Border } from "../GlobalStyles";

const SampsunSignInResponsive3 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.sampsunSignInResponsive}>
      <Image
        style={[styles.image15Icon, styles.navbarPosition]}
        contentFit="cover"
        source={require("../assets/image-151.png")}
      />
      <View style={[styles.frameParent, styles.navbarPosition]}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/frame-13470.png")}
        />
        <Image
          style={styles.frameItem}
          contentFit="cover"
          source={require("../assets/vector-182.png")}
        />
        <View style={styles.frameWrapper}>
          <Image
            style={styles.frameInner}
            contentFit="cover"
            source={require("../assets/frame-13437.png")}
          />
        </View>
      </View>
      <View style={[styles.frameGroup, styles.framePosition]}>
        <View style={styles.frameContainer}>
          <View>
            <Text style={[styles.welcomeBack, styles.referralTypo]}>
              Welcome Back
            </Text>
            <Text style={[styles.mrJohnDoe, styles.textTypo]}>
              Mr. John Doe
            </Text>
          </View>
        </View>
        <View style={styles.frameView}>
          <View style={[styles.frameParent1, styles.framePosition]}>
            <Pressable
              style={[styles.summaryWrapper, styles.wrapperSpaceBlock]}
              onPress={() => navigation.navigate("SampsunSignInResponsive")}
            >
              <Text style={[styles.summary, styles.summaryTypo]}>Summary</Text>
            </Pressable>
            <View style={[styles.databaseWrapper, styles.wrapperSpaceBlock]}>
              <Text style={[styles.summary, styles.summaryTypo]}>Database</Text>
            </View>
            <Pressable
              style={[styles.investmentWrapper, styles.wrapperSpaceBlock]}
              onPress={() => navigation.navigate("SampsunSignInResponsive1")}
            >
              <Text style={[styles.summary, styles.summaryTypo]}>
                Investment
              </Text>
            </Pressable>
            <Pressable
              style={[styles.exposureWrapper, styles.wrapperSpaceBlock]}
              onPress={() => navigation.navigate("SampsunSignInResponsive2")}
            >
              <Text style={[styles.summary, styles.summaryTypo]}>Exposure</Text>
            </Pressable>
            <View
              style={[
                styles.referralCashBackWrapper,
                styles.x6a5sdxasdParentBorder,
              ]}
            >
              <Text
                style={[styles.referralCash, styles.textTypo]}
              >{`Referral & Cash back`}</Text>
            </View>
          </View>
        </View>
        <View style={styles.frameParent2}>
          <View style={styles.frameContainer}>
            <View style={styles.productParent}>
              <View style={styles.product}>
                <Text style={[styles.referral, styles.referralTypo]}>
                  Referral
                </Text>
              </View>
              <View style={styles.frequency100Parent}>
                <Text style={[styles.frequency100, styles.signUpUsingFlexBox]}>
                  Frequency - 1.00
                </Text>
                <Text style={[styles.frequency100, styles.signUpUsingFlexBox]}>
                  Maximum per day - 1.00
                </Text>
                <Text style={[styles.frequency100, styles.signUpUsingFlexBox]}>
                  Maximum total - 999
                </Text>
              </View>
            </View>
            <View style={styles.frameParentPosition}>
              <View style={styles.frameParent5}>
                <View style={styles.referralPointParent}>
                  <Text
                    style={[styles.referralPoint, styles.signUpUsingFlexBox]}
                  >
                    Referral point
                  </Text>
                  <Text style={[styles.text, styles.textTypo]}>3,350</Text>
                </View>
                <View style={styles.referralPointParent}>
                  <Text
                    style={[styles.referralPoint, styles.signUpUsingFlexBox]}
                  >
                    Referral user
                  </Text>
                  <Text style={[styles.text, styles.textTypo]}>19</Text>
                </View>
              </View>
              <View style={styles.frameParent2}>
                <Text style={[styles.referralPoint, styles.signUpUsingFlexBox]}>
                  You have been referred by
                </Text>
                <Text style={[styles.text, styles.textTypo]}>x6a5sdx625</Text>
              </View>
              <View style={styles.frameParent2}>
                <Text style={[styles.referralPoint, styles.signUpUsingFlexBox]}>
                  Referral Link
                </Text>
                <View
                  style={[
                    styles.x6a5sdxasdParent,
                    styles.x6a5sdxasdParentBorder,
                  ]}
                >
                  <Text style={styles.x6a5sdxasd}>x6a5sdxasd</Text>
                  <Image
                    style={styles.frameIcon}
                    contentFit="cover"
                    source={require("../assets/frame.png")}
                  />
                </View>
              </View>
            </View>
            <View style={styles.frameParentPosition}>
              <View style={styles.socialMediaReferralParent}>
                <Text style={[styles.referralPoint, styles.signUpUsingFlexBox]}>
                  Social media referral
                </Text>
                <Text style={[styles.text, styles.textTypo]}>2.00</Text>
              </View>
              <View style={styles.referNewInvestorParent}>
                <Text style={[styles.referralPoint, styles.signUpUsingFlexBox]}>
                  Refer new investor
                </Text>
                <Text style={[styles.signUpUsing, styles.signUpUsingFlexBox]}>
                  Sign up using referral ID
                </Text>
                <Text style={[styles.text, styles.textTypo]}>
                  10% of his points
                </Text>
              </View>
              <View style={styles.referNewInvestorParent}>
                <Text style={[styles.referralPoint, styles.signUpUsingFlexBox]}>
                  New investor invest
                </Text>
                <Text style={[styles.text, styles.textTypo]}>2.00</Text>
              </View>
            </View>
            <View style={styles.frameParentPosition}>
              <View style={styles.socialMediaReferralParent}>
                <Text
                  style={[styles.referralPoint, styles.signUpUsingFlexBox]}
                >{`Conference call other activities `}</Text>
                <Text style={[styles.text, styles.textTypo]}>0.00</Text>
              </View>
              <View style={styles.referNewInvestorParent}>
                <Text
                  style={[styles.referralPoint, styles.signUpUsingFlexBox]}
                >{`Referral challenges `}</Text>
                <Text style={[styles.text, styles.textTypo]}>0.00</Text>
              </View>
              <View style={styles.referNewInvestorParent}>
                <Text style={[styles.referralPoint, styles.signUpUsingFlexBox]}>
                  Referral milestones
                </Text>
                <Text style={[styles.text, styles.textTypo]}>0.00</Text>
              </View>
              <View style={styles.referNewInvestorParent}>
                <Text
                  style={[styles.referralPoint, styles.signUpUsingFlexBox]}
                >{`Referral leaderboards `}</Text>
                <Text style={[styles.text, styles.textTypo]}>0.00</Text>
              </View>
            </View>
          </View>
          <View style={styles.frameParent8}>
            <View style={styles.productParent}>
              <View style={styles.product}>
                <Text style={[styles.referral, styles.referralTypo]}>
                  Referral
                </Text>
              </View>
              <View style={styles.billionSmai20200PointsWrapper}>
                <Text style={[styles.frequency100, styles.signUpUsingFlexBox]}>
                  1 Billion SMAI 2.0 = 200 points
                </Text>
              </View>
            </View>
            <View style={[styles.frameParent9, styles.frameParentPosition]}>
              <View style={styles.referralPointParent}>
                <Text style={[styles.totalCashBack, styles.signUpUsingFlexBox]}>
                  Total Cash back
                </Text>
                <Text style={[styles.text, styles.textTypo]}>199</Text>
              </View>
              <View style={styles.cashBackParent}>
                <Text style={[styles.totalCashBack, styles.signUpUsingFlexBox]}>
                  Cash back
                </Text>
                <Text style={[styles.text, styles.textTypo]}>1.00</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <Image
        style={styles.sampsunSignInResponsiveChild}
        contentFit="cover"
        source={require("../assets/vector-196.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  navbarPosition: {
    width: 390,
    left: "50%",
    marginLeft: -195,
    position: "absolute",
  },
  framePosition: {
    left: 0,
    position: "absolute",
  },
  referralTypo: {
    fontFamily: FontFamily.p16B,
    fontWeight: "700",
    color: Color.colorContent,
  },
  textTypo: {
    fontFamily: FontFamily.p24M,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorContent,
  },
  wrapperSpaceBlock: {
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
  },
  summaryTypo: {
    fontFamily: FontFamily.p14R,
    lineHeight: 20,
    fontSize: FontSize.s14R_size,
    letterSpacing: -0.3,
    color: Color.colorContent,
  },
  x6a5sdxasdParentBorder: {
    borderWidth: 1,
    borderColor: Color.color,
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
  },
  signUpUsingFlexBox: {
    opacity: 0.76,
    textAlign: "left",
  },
  frameParentPosition: {
    paddingTop: Padding.p_xl,
    borderTopWidth: 1,
    borderColor: Color.colorGray_400,
    borderStyle: "solid",
    marginTop: 20,
    alignSelf: "stretch",
  },
  frameChildLayout: {
    marginLeft: 1.8,
    width: 4,
    backgroundColor: Color.colorBlack,
    borderRadius: Border.br_12xs,
  },
  frameChild5SpaceBlock: {
    marginLeft: 6,
    height: 13,
  },
  frameChildPosition: {
    transform: [
      {
        rotate: "90deg",
      },
    ],
    left: 24,
    position: "absolute",
  },
  image15Icon: {
    height: 895,
    display: "none",
    top: 0,
  },
  frameChild: {
    width: 44,
    height: 44,
  },
  frameItem: {
    width: 11,
    height: 11,
    opacity: 0,
  },
  frameInner: {
    height: 16,
    width: 20,
  },
  frameWrapper: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.color,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_sm,
    justifyContent: "center",
    alignItems: "center",
  },
  frameParent: {
    top: 48,
    height: 80,
    padding: Padding.p_xl,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  welcomeBack: {
    textShadowColor: "rgba(241, 174, 33, 0.15)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 150,
    textAlign: "left",
    color: Color.colorContent,
    fontSize: FontSize.primary_size,
    fontWeight: "700",
  },
  mrJohnDoe: {
    opacity: 0.8,
    marginTop: 6,
    letterSpacing: -0.3,
    fontFamily: FontFamily.p24M,
    fontSize: FontSize.secondary_size,
  },
  frameContainer: {
    alignSelf: "stretch",
  },
  summary: {
    textAlign: "left",
  },
  summaryWrapper: {
    borderRadius: Border.br_11xl,
    alignItems: "center",
    flexDirection: "row",
  },
  databaseWrapper: {
    alignItems: "center",
    flexDirection: "row",
    display: "none",
  },
  investmentWrapper: {
    borderRadius: Border.br_21xl,
    alignItems: "center",
    flexDirection: "row",
  },
  exposureWrapper: {
    borderRadius: Border.br_41xl,
    alignItems: "center",
    flexDirection: "row",
  },
  referralCash: {
    letterSpacing: -0.3,
    fontFamily: FontFamily.p24M,
    fontSize: FontSize.secondary_size,
  },
  referralCashBackWrapper: {
    borderRadius: 50,
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
  },
  frameParent1: {
    justifyContent: "flex-end",
    width: 350,
    alignItems: "center",
    flexDirection: "row",
    top: 0,
  },
  frameView: {
    height: 32,
    marginTop: 20,
    width: 350,
  },
  referral: {
    textAlign: "left",
    color: Color.colorContent,
    fontSize: FontSize.primary_size,
    fontWeight: "700",
  },
  product: {
    alignItems: "center",
    flexDirection: "row",
  },
  frequency100: {
    color: Color.color3,
    fontFamily: FontFamily.secondary,
    fontSize: FontSize.s14R_size,
    opacity: 0.76,
    letterSpacing: -0.3,
  },
  frequency100Parent: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  productParent: {
    alignSelf: "stretch",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  referralPoint: {
    fontFamily: FontFamily.secondary,
    fontSize: FontSize.s14R_size,
    opacity: 0.76,
    letterSpacing: -0.3,
    color: Color.colorContent,
  },
  text: {
    fontSize: FontSize.p24M_size,
    lineHeight: 24,
    marginTop: 10,
  },
  referralPointParent: {
    width: 160,
  },
  frameParent5: {
    flexDirection: "row",
  },
  frameParent2: {
    marginTop: 20,
    alignSelf: "stretch",
  },
  x6a5sdxasd: {
    color: Color.color2,
    fontFamily: FontFamily.secondary,
    fontSize: FontSize.secondary_size,
    textAlign: "left",
  },
  frameIcon: {
    height: 18,
    width: 18,
    overflow: "hidden",
  },
  x6a5sdxasdParent: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorContent,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_xs,
    marginTop: 10,
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  socialMediaReferralParent: {
    width: 320,
  },
  signUpUsing: {
    fontSize: FontSize.s12SB_size,
    letterSpacing: -0.2,
    marginTop: 10,
    color: Color.colorContent,
    fontFamily: FontFamily.p16B,
    fontWeight: "700",
  },
  referNewInvestorParent: {
    width: 320,
    marginTop: 20,
  },
  billionSmai20200PointsWrapper: {
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
  },
  totalCashBack: {
    fontFamily: FontFamily.p14R,
    lineHeight: 20,
    fontSize: FontSize.s14R_size,
    letterSpacing: -0.3,
    color: Color.colorContent,
  },
  cashBackParent: {
    marginLeft: 40,
    width: 160,
  },
  frameParent9: {
    flexDirection: "row",
  },
  frameParent8: {
    marginTop: 40,
    alignSelf: "stretch",
  },
  frameGroup: {
    top: 148,
    paddingLeft: Padding.p_xl,
  },
  text10: {
    letterSpacing: -0.4,
    fontFamily: FontFamily.interMedium,
    color: Color.colorBlack,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.primary_size,
  },
  frameChild1: {
    height: 20,
    width: 20,
  },
  rectangleView: {
    height: 5,
    width: 4,
    backgroundColor: Color.colorBlack,
    borderRadius: Border.br_12xs,
  },
  frameChild2: {
    height: 7,
  },
  frameChild3: {
    height: 10,
  },
  frameChild4: {
    height: 12,
  },
  rectangleParent: {
    alignItems: "flex-end",
    flexDirection: "row",
  },
  frameChild5: {
    width: 18,
  },
  frameChild6: {
    top: 2,
    borderRadius: Border.br_10xs,
    width: 9,
    height: 22,
    backgroundColor: Color.colorBlack,
    transform: [
      {
        rotate: "90deg",
      },
    ],
    left: 24,
  },
  frameChild7: {
    borderRadius: Border.br_9xs,
    borderColor: Color.colorGray_100,
    borderWidth: 0.8,
    width: 13,
    height: 26,
    transform: [
      {
        rotate: "90deg",
      },
    ],
    left: 24,
    borderStyle: "solid",
    top: 0,
  },
  ellipseIcon: {
    top: 5,
    left: 25,
    width: 3,
    height: 3,
    position: "absolute",
  },
  rectangleGroup: {
    width: 28,
  },
  navbar: {
    paddingLeft: Padding.p_25xl,
    paddingTop: Padding.p_lg,
    paddingRight: Padding.p_13xl,
    paddingBottom: Padding.p_3xs,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    top: 0,
    backgroundColor: Color.color2,
  },
  sampsunSignInResponsiveChild: {
    marginLeft: -65,
    bottom: 3,
    maxHeight: "100%",
    width: 130,
    borderRadius: Border.br_12xs,
    left: "50%",
    position: "absolute",
  },
  sampsunSignInResponsive: {
    flex: 1,
    width: "100%",
    height: 1304,
    overflow: "hidden",
    backgroundColor: Color.color2,
  },
});

export default SampsunSignInResponsive3;
