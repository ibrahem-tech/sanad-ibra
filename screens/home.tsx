import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const SampsunSignInResponsive = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.sampsunSignInResponsive}>
      <Image
        style={[styles.image15Icon, styles.navbarPosition]}
        contentFit="cover"
        source={require("../assets/image-15.png")}
      />
      <View style={[styles.frameParent, styles.frameParentFlexBox]}>
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
            <Text style={[styles.welcomeBack, styles.database1Typo]}>
              Welcome Back
            </Text>
            <Text style={[styles.mrJohnDoe, styles.summaryTypo]}>
              Mr. John Doe
            </Text>
          </View>
        </View>
        <View style={styles.frameView}>
          <View style={[styles.frameParent1, styles.framePosition]}>
            <View style={[styles.summaryWrapper, styles.wrapperFlexBox]}>
              <Text style={styles.summaryTypo}>Summary</Text>
            </View>
            <View style={[styles.databaseWrapper, styles.wrapperFlexBox]}>
              <Text style={[styles.database, styles.tierTypo]}>Database</Text>
            </View>
            <Pressable
              style={styles.wrapperFlexBox}
              onPress={() => navigation.navigate("SampsunSignInResponsive1")}
            >
              <Text style={[styles.database, styles.tierTypo]}>Investment</Text>
            </Pressable>
            <Pressable
              style={styles.wrapperFlexBox}
              onPress={() => navigation.navigate("SampsunSignInResponsive2")}
            >
              <Text style={[styles.database, styles.tierTypo]}>Exposure</Text>
            </Pressable>
            <Pressable
              style={styles.wrapperFlexBox}
              onPress={() => navigation.navigate("SampsunSignInResponsive3")}
            >
              <Text
                style={[styles.database, styles.tierTypo]}
              >{`Referral & Cash back`}</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.productParent}>
          <View style={styles.product}>
            <Text style={[styles.tier, styles.tierClr]}>Tier</Text>
            <Text style={styles.gold}>Gold</Text>
          </View>
          <View style={[styles.frameParent2, styles.frameParentLayout]}>
            <View style={styles.frameParent3}>
              <View style={styles.holdingPointsParent}>
                <Text style={[styles.holdingPoints, styles.tier1Typo]}>
                  Holding points
                </Text>
                <Text style={[styles.text, styles.textTypo]}>259,277</Text>
              </View>
              <View style={styles.pointsParent}>
                <Text style={[styles.holdingPoints, styles.tier1Typo]}>
                  Points
                </Text>
                <Text style={[styles.text, styles.textTypo]}>2,333</Text>
              </View>
            </View>
            <View style={styles.frameParent4}>
              <View style={styles.holdingPointsParent}>
                <Text style={[styles.holdingPoints, styles.tier1Typo]}>
                  Total Points
                </Text>
                <Text style={[styles.text, styles.textTypo]}>261,610</Text>
              </View>
              <View style={styles.pointsParent}>
                <Text style={[styles.holdingPoints, styles.tier1Typo]}>
                  Cashback
                </Text>
                <Text style={[styles.text, styles.textTypo]}>1,780.00</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.frameParent5, styles.frameParentSpaceBlock]}>
          <View style={[styles.frameParent6, styles.frameParentFlexBox]}>
            <View style={styles.referralPointParent}>
              <Text style={[styles.holdingPoints, styles.tier1Typo]}>
                Referral point
              </Text>
              <Text style={[styles.text, styles.textTypo]}>3,350</Text>
            </View>
            <View style={styles.referralPointParent}>
              <Text style={[styles.holdingPoints, styles.tier1Typo]}>
                Referral user
              </Text>
              <Text style={[styles.text, styles.textTypo]}>19</Text>
            </View>
          </View>
          <View style={styles.frameParent7}>
            <View style={styles.youHaveBeenReferredByParent}>
              <Text style={[styles.holdingPoints, styles.tier1Typo]}>
                You have been referred by
              </Text>
              <Text style={[styles.text, styles.textTypo]}>x6a5sdx625</Text>
            </View>
            <View style={styles.frameParent7}>
              <Text style={[styles.holdingPoints, styles.tier1Typo]}>
                Referral Link
              </Text>
              <View style={[styles.x6a5sdxasdParent, styles.parentBorder]}>
                <Text style={[styles.x6a5sdxasd, styles.tier1Typo]}>
                  x6a5sdxasd
                </Text>
                <Image
                  style={styles.frameIcon}
                  contentFit="cover"
                  source={require("../assets/frame.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.frameParent8, styles.frameParentSpaceBlock]}>
          <View style={[styles.frameParent6, styles.frameParentFlexBox]}>
            <View style={styles.product1}>
              <Text style={styles.database1Typo}>Database</Text>
            </View>
            <View style={styles.product}>
              <Text style={[styles.tier1, styles.tier1Typo]}>Tier</Text>
              <Text style={styles.gold}>3,350</Text>
            </View>
          </View>
          <View style={styles.frameWrapper1}>
            <View style={styles.frameWrapper2}>
              <View style={styles.frameParent9}>
                <View style={styles.frameParent10}>
                  <View style={styles.frameContainer}>
                    <View
                      style={[styles.frameParent11, styles.frameParentLayout]}
                    >
                      <View>
                        <Text style={[styles.holdingPoints, styles.tier1Typo]}>
                          Registration
                        </Text>
                        <Text style={[styles.text7, styles.textTypo]}>1</Text>
                      </View>
                      <View style={styles.frameParent12}>
                        <View>
                          <Text
                            style={[styles.holdingPoints, styles.tier1Typo]}
                          >
                            Points
                          </Text>
                          <Text style={[styles.text7, styles.textTypo]}>
                            1.00
                          </Text>
                        </View>
                        <Image
                          style={[styles.frameChild1, styles.frameChildLayout1]}
                          contentFit="cover"
                          source={require("../assets/frame-156.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={styles.frameWrapper4}>
                    <View
                      style={[styles.frameParent11, styles.frameParentLayout]}
                    >
                      <View>
                        <Text style={[styles.holdingPoints, styles.tier1Typo]}>
                          First Login
                        </Text>
                        <Text style={[styles.text7, styles.textTypo]}>1</Text>
                      </View>
                      <View style={styles.frameParent12}>
                        <View>
                          <Text
                            style={[styles.holdingPoints, styles.tier1Typo]}
                          >
                            Points
                          </Text>
                          <Text style={[styles.text7, styles.textTypo]}>
                            1.00
                          </Text>
                        </View>
                        <Image
                          style={[styles.frameChild1, styles.frameChildLayout1]}
                          contentFit="cover"
                          source={require("../assets/frame-156.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={styles.frameWrapper4}>
                    <View
                      style={[styles.frameParent11, styles.frameParentLayout]}
                    >
                      <View>
                        <Text style={[styles.holdingPoints, styles.tier1Typo]}>
                          Daily Login
                        </Text>
                        <Text style={[styles.text7, styles.textTypo]}>1</Text>
                      </View>
                      <View style={styles.frameParent12}>
                        <View>
                          <Text
                            style={[styles.holdingPoints, styles.tier1Typo]}
                          >
                            Points
                          </Text>
                          <Text style={[styles.text7, styles.textTypo]}>
                            1.00
                          </Text>
                        </View>
                        <Image
                          style={[styles.frameChild1, styles.frameChildLayout1]}
                          contentFit="cover"
                          source={require("../assets/frame-156.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={styles.frameWrapper4}>
                    <View
                      style={[styles.frameParent11, styles.frameParentLayout]}
                    >
                      <View>
                        <Text style={[styles.holdingPoints, styles.tier1Typo]}>
                          Full Name
                        </Text>
                        <Text style={[styles.text7, styles.textTypo]}>1</Text>
                      </View>
                      <View style={styles.frameParent12}>
                        <View>
                          <Text
                            style={[styles.holdingPoints, styles.tier1Typo]}
                          >
                            Points
                          </Text>
                          <Text style={[styles.text7, styles.textTypo]}>
                            1.00
                          </Text>
                        </View>
                        <Image
                          style={[styles.frameChild1, styles.frameChildLayout1]}
                          contentFit="cover"
                          source={require("../assets/frame-156.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={styles.frameWrapper4}>
                    <View
                      style={[styles.frameParent11, styles.frameParentLayout]}
                    >
                      <View style={styles.dateOfBirthParent}>
                        <Text style={[styles.holdingPoints, styles.tier1Typo]}>
                          Date of birth
                        </Text>
                        <Text style={[styles.text7, styles.textTypo]}>1</Text>
                      </View>
                      <View style={styles.frameParent12}>
                        <View style={styles.dateOfBirthParent}>
                          <Text
                            style={[styles.holdingPoints, styles.tier1Typo]}
                          >
                            Points
                          </Text>
                          <Text style={[styles.text7, styles.textTypo]}>
                            1.00
                          </Text>
                        </View>
                        <Image
                          style={[styles.frameChild1, styles.frameChildLayout1]}
                          contentFit="cover"
                          source={require("../assets/frame-157.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={styles.frameWrapper4}>
                    <View
                      style={[styles.frameParent11, styles.frameParentLayout]}
                    >
                      <View style={styles.dateOfBirthParent}>
                        <Text style={[styles.holdingPoints, styles.tier1Typo]}>
                          Country
                        </Text>
                        <Text style={[styles.text7, styles.textTypo]}>1</Text>
                      </View>
                      <View style={styles.frameParent12}>
                        <View style={styles.dateOfBirthParent}>
                          <Text
                            style={[styles.holdingPoints, styles.tier1Typo]}
                          >
                            Points
                          </Text>
                          <Text style={[styles.text7, styles.textTypo]}>
                            1.00
                          </Text>
                        </View>
                        <Image
                          style={[styles.frameChild1, styles.frameChildLayout1]}
                          contentFit="cover"
                          source={require("../assets/frame-157.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={styles.frameWrapper4}>
                    <View
                      style={[styles.frameParent11, styles.frameParentLayout]}
                    >
                      <View style={styles.dateOfBirthParent}>
                        <Text style={[styles.holdingPoints, styles.tier1Typo]}>
                          Country
                        </Text>
                        <Text style={[styles.text7, styles.textTypo]}>1</Text>
                      </View>
                      <View style={styles.frameParent12}>
                        <View style={styles.dateOfBirthParent}>
                          <Text
                            style={[styles.holdingPoints, styles.tier1Typo]}
                          >
                            Points
                          </Text>
                          <Text style={[styles.text7, styles.textTypo]}>
                            1.00
                          </Text>
                        </View>
                        <Image
                          style={[styles.frameChild1, styles.frameChildLayout1]}
                          contentFit="cover"
                          source={require("../assets/frame-157.png")}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <Image
                  style={styles.frameChild8}
                  contentFit="cover"
                  source={require("../assets/frame-161.png")}
                />
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
  frameParentFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  framePosition: {
    left: 0,
    position: "absolute",
  },
  database1Typo: {
    textAlign: "left",
    color: Color.colorContent,
    fontFamily: FontFamily.p16B,
    fontWeight: "700",
    fontSize: FontSize.primary_size,
  },
  summaryTypo: {
    fontFamily: FontFamily.p24M,
    fontWeight: "500",
    letterSpacing: -0.3,
    fontSize: FontSize.secondary_size,
    textAlign: "left",
    color: Color.colorContent,
  },
  wrapperFlexBox: {
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  tierTypo: {
    fontFamily: FontFamily.p14R,
    lineHeight: 20,
    textAlign: "left",
  },
  tierClr: {
    color: Color.color3,
    fontSize: FontSize.s14R_size,
    letterSpacing: -0.3,
  },
  frameParentLayout: {
    borderRadius: Border.br_3xs,
    flexDirection: "row",
  },
  tier1Typo: {
    fontFamily: FontFamily.secondary,
    textAlign: "left",
  },
  textTypo: {
    lineHeight: 24,
    fontSize: FontSize.p24M_size,
    fontFamily: FontFamily.p24M,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorContent,
  },
  frameParentSpaceBlock: {
    paddingTop: Padding.p_xl,
    marginTop: 20,
  },
  parentBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  frameChildLayout1: {
    height: 20,
    width: 20,
  },
  frameChildLayout: {
    marginLeft: 1.8,
    width: 4,
    backgroundColor: Color.colorBlack,
    borderRadius: Border.br_12xs,
  },
  frameChild13SpaceBlock: {
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
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    flexDirection: "row",
    width: 390,
    left: "50%",
    marginLeft: -195,
    position: "absolute",
  },
  welcomeBack: {
    textShadowColor: "rgba(241, 174, 33, 0.15)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 150,
  },
  mrJohnDoe: {
    opacity: 0.8,
    marginTop: 6,
  },
  frameContainer: {
    alignSelf: "stretch",
  },
  summaryWrapper: {
    borderRadius: Border.br_11xl,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Color.color,
  },
  database: {
    fontSize: FontSize.s14R_size,
    letterSpacing: -0.3,
    color: Color.colorContent,
  },
  databaseWrapper: {
    display: "none",
  },
  frameParent1: {
    width: 350,
    flexDirection: "row",
    top: 0,
  },
  frameView: {
    height: 32,
    marginTop: 20,
    width: 350,
  },
  tier: {
    fontFamily: FontFamily.p14R,
    lineHeight: 20,
    textAlign: "left",
  },
  gold: {
    marginLeft: 4,
    letterSpacing: -0.3,
    fontSize: FontSize.secondary_size,
    textAlign: "left",
    color: Color.colorContent,
    fontFamily: FontFamily.p16B,
    fontWeight: "700",
  },
  product: {
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
  },
  holdingPoints: {
    opacity: 0.76,
    fontSize: FontSize.s14R_size,
    letterSpacing: -0.3,
    color: Color.colorContent,
  },
  text: {
    marginTop: 10,
  },
  holdingPointsParent: {
    width: 120,
  },
  pointsParent: {
    marginLeft: 60,
    width: 120,
  },
  frameParent3: {
    flexDirection: "row",
  },
  frameParent4: {
    marginLeft: 20,
    flexDirection: "row",
  },
  frameParent2: {
    borderColor: Color.color3,
    flexWrap: "wrap",
    padding: Padding.p_xl,
    marginTop: 10,
    borderWidth: 1,
    borderStyle: "solid",
    width: 350,
  },
  productParent: {
    alignItems: "flex-end",
    marginTop: 20,
  },
  referralPointParent: {
    width: 160,
  },
  frameParent6: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  youHaveBeenReferredByParent: {
    width: 320,
  },
  x6a5sdxasd: {
    color: Color.color2,
    fontSize: FontSize.secondary_size,
    fontFamily: FontFamily.secondary,
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
    borderColor: Color.color,
    borderWidth: 1,
    alignSelf: "stretch",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  frameParent7: {
    marginTop: 20,
    alignSelf: "stretch",
  },
  frameParent5: {
    borderColor: Color.colorGray_400,
    borderTopWidth: 1,
    borderStyle: "solid",
    width: 350,
  },
  product1: {
    alignItems: "center",
    flexDirection: "row",
  },
  tier1: {
    color: Color.color3,
    fontSize: FontSize.s14R_size,
    letterSpacing: -0.3,
  },
  text7: {
    marginTop: 4,
  },
  frameChild1: {
    borderRadius: Border.br_21xl,
    marginLeft: 40,
    overflow: "hidden",
  },
  frameParent12: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  frameParent11: {
    alignSelf: "stretch",
    justifyContent: "space-between",
    alignItems: "center",
  },
  frameWrapper4: {
    marginTop: 10,
    alignSelf: "stretch",
  },
  dateOfBirthParent: {
    opacity: 0.5,
  },
  frameParent10: {
    flex: 1,
  },
  frameChild8: {
    maxWidth: "100%",
    height: 340,
    marginLeft: 20,
    overflow: "hidden",
  },
  frameParent9: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  frameWrapper2: {
    borderRadius: 20,
    width: 350,
    backgroundColor: Color.color2,
  },
  frameWrapper1: {
    justifyContent: "flex-end",
    marginTop: 20,
  },
  frameParent8: {
    alignSelf: "stretch",
  },
  frameGroup: {
    top: 148,
    paddingLeft: Padding.p_xl,
  },
  text21: {
    letterSpacing: -0.4,
    fontFamily: FontFamily.interMedium,
    color: Color.colorBlack,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.primary_size,
  },
  rectangleView: {
    height: 5,
    width: 4,
    backgroundColor: Color.colorBlack,
    borderRadius: Border.br_12xs,
  },
  frameChild10: {
    height: 7,
  },
  frameChild11: {
    height: 10,
  },
  frameChild12: {
    height: 12,
  },
  rectangleParent: {
    alignItems: "flex-end",
    flexDirection: "row",
  },
  frameChild13: {
    width: 18,
  },
  frameChild14: {
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
  frameChild15: {
    borderRadius: Border.br_9xs,
    borderColor: Color.colorGray_100,
    borderWidth: 0.8,
    width: 13,
    height: 26,
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
    flexDirection: "row",
    width: 390,
    left: "50%",
    marginLeft: -195,
    position: "absolute",
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
    width: "100%",
    height: 1180,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.color2,
  },
});

export default SampsunSignInResponsive;
